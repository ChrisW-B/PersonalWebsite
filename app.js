var config = require('./config'),
	Twitter = require('twitter'),
	express = require('express'),
	twitterText = require('twitter-text'),
	Lastfm = require('lastfm-njs'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	vm = require('vm'),
	request = require('request'),
	compression = require('compression'),
	app = express(),
	scribe = require('scribe-js')(),
	console = process.console;

const ONE_MIN = 60 * 1000,
	ONE_DAY = ONE_MIN * 60 * 24;

var twitterClient = new Twitter({
		consumer_key: config.twitter.consumerKey,
		consumer_secret: config.twitter.consumerSecret,
		access_token_key: config.twitter.accessToken,
		access_token_secret: config.twitter.accessSecret
	}),
	lastFmClient = new Lastfm({
		apiKey: config.lastfm.apiKey,
		apiSecret: config.lastfm.apiSecret
	}),
	photoData = {};

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public", {
	maxAge: ONE_DAY
}));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(compression());
app.use(scribe.express.logger(console)); //Log each request
app.use('/logs', scribe.webPanel());
app.get('/', function(req, res) {
	res.render('pages/index');
});
app.get('/twitter', function(req, res) {
	console.log("getting recent tweet");
	var params = {
		screen_name: "ChrisW_B",
		count: 20, //make sure we get enough to ignore RTs
		exclude_replies: true,
		include_rts: false
	};
	twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			newTweet = tweets[0];
			res.send({
				success: true,
				text: twitterText.autoLink(newTweet.text, {
					urlEntities: newTweet.entities.urls
				}),
				time: relativeTimeDifference(new Date(newTweet.created_at)),
				link: "https://twitter.com/statuses/" + newTweet.id_str
			});
			console.log("got tweet");
		} else {
			res.send({
				success: false
			});
		}
	});
});
var recentPhoto = "";

app.get('/bg', function(req, res) {
	request("http://photo.chriswbarry.com/api/read/json?number=20&type=photo",
		function(error, result, body) {
			if (!error && result.statusCode == 200) {
				var sandbox = {};
				vm.runInNewContext(body, sandbox, 'myfile.vm');
				var randNum = Math.round(Math.random() * (sandbox.tumblr_api_read.posts.length - 1));
				recentPhoto = sandbox.tumblr_api_read.posts[randNum];
				request(recentPhoto['photo-url-1280']).pipe(res);
			}
		}
	);
});

app.get('/bginfo', function(req, res) {
	if (recentPhoto !== undefined && recentPhoto !== "") {
		res.send({
			success: true,
			link: recentPhoto.url,
			descrip: "Background: <br/>" + recentPhoto['photo-caption'].replace(/(<([^>]+)>)/ig, ""),
		});
	} else {
		res.send({
			success: false
		});
	}
});

app.get('/lastfm', function(req, res) {
	console.log("getting recent play");
	lastFmClient.user_getRecentTracks({
		user: 'Christo27',
		limit: 1,
		callback: function(result) {
			recentPlay = "";
			if (result.success) {
				var lastTrack = result.track[0];
				if (lastTrack !== undefined && lastTrack['@attr'].nowplaying) {
					console.log("updated now playing");
					res.send({
						success: true,
						text: "♫ " + lastTrack.name + " by " + lastTrack.artist['#text']
					});
				}
			} else {
				res.send({
					success: false
				});
			}
		}
	});
});

app.listen(4737, function() {
	console.log('SpotifyApps listening on port 4737!');
});

function relativeTimeDifference(previous) {
	//based on http://stackoverflow.com/a/6109105/6465731
	var current = new Date(),
		msPerMinute = 60 * 1000,
		msPerHour = msPerMinute * 60,
		msPerDay = msPerHour * 24,
		msPerMonth = msPerDay * 30,
		msPerYear = msPerDay * 365,
		elapsed = current - previous,
		num = 0,
		unit = "",
		approx = "";
	if (elapsed < msPerMinute) {
		num = Math.round(elapsed / 1000);
		unit = 'second';
	} else if (elapsed < msPerHour) {
		num = Math.round(elapsed / msPerMinute);
		unit = 'minute';
	} else if (elapsed < msPerDay) {
		num = Math.round(elapsed / msPerHour);
		unit = 'hour';
	} else if (elapsed < msPerMonth) {
		num = 'approximately ' + Math.round(elapsed / msPerDay);
		unit = 'day';
		approx = 'approximately';
	} else if (elapsed < msPerYear) {
		num = 'approximately ' + Math.round(elapsed / msPerMonth);
		unit = 'month';
		approx = 'approximately';
	} else {
		num = 'approximately' + Math.round(elapsed / msPerYear);
		unit = 'year';
		approx = 'approximately';
	}
	if (num != 1) {
		unit += "s";
	}
	return approx + " " + num + " " + unit + " ago";
}
var download = function(uri, filename, callback) {
	//saving a file
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};