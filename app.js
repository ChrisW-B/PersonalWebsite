var config = require('./config'),
	Twitter = require('twitter'),
	express = require('express'),
	twitterText = require('twitter-text'),
	Lastfm = require('simple-lastfm'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	vm = require('vm'),
	request = require('request'),
	compression = require('compression'),
	app = express(),
	scribe = require('scribe-js')(),
	console = process.console;
const ONE_MIN = 60 * 1000,
	ONE_DAY = 86400000;
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
	setTimeout(function() {
		getNewBgImage();
	}, ONE_MIN / 2); //wait a bit before loading a new bg
	res.render('pages/index', {
		lastTweet: recentTweet.text,
		tweetTime: relativeTimeDifference(new Date(recentTweet.time)),
		tweetLink: recentTweet.link,
		lastPlay: recentPlay,
		photoLink: photoData.link,
		photoDescrip: photoData.descrip
	});
});
app.listen(4737, function() {
	console.log('SpotifyApps listening on port 4737!');
});
var twitterClient = new Twitter({
		consumer_key: config.twitter.consumerKey,
		consumer_secret: config.twitter.consumerSecret,
		access_token_key: config.twitter.accessToken,
		access_token_secret: config.twitter.accessSecret
	}),
	lastFmClient = new Lastfm({
		api_key: config.lastfm.apiKey,
		api_secret: config.lastfm.apiSecret
	}),
	recentTweet = {},
	recentPlay = "",
	photoData = {},
	okToDownloadPhoto = true;

function getMostRecentTweet() {
	console.log("getting recent tweet");
	var params = {
		screen_name: "ChrisW_B",
		count: 20,
		exclude_replies: true,
		include_rts: false
	};
	twitterClient.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			newTweet = tweets[0];
			recentTweet.text = twitterText.autoLink(newTweet.text, {
				urlEntities: newTweet.entities.urls
			});
			recentTweet.time = newTweet.created_at;
			recentTweet.link = "https://twitter.com/statuses/" + newTweet.id_str;
			console.log("updated tweet");
		} else {
			console.log(error);
		}
	});
}

function getMostRecentPlay() {
	console.log("getting recent play");
	lastFmClient.getRecentTracks({
		user: 'Christo27',
		limit: 1,
		callback: function(result) {
			recentPlay = "";
			if (result.success) {
				var lastTrack = result.recentTracks[0];
				if (lastTrack !== undefined && lastTrack['@'].nowplaying) {
					console.log("updated now playing");
					recentPlay = "♫ " + lastTrack.name + " by " + lastTrack.artist['#'];
				}
			}
		}
	});
}

function getNewBgImage() {
	if (!okToDownloadPhoto) {
		return;
	}
	okToDownloadPhoto = false;
	var url = "http://photo.chriswbarry.com/api/read/json?number=20&type=photo";
	request(url, function(error, res, body) {
		if (!error && res.statusCode == 200) {
			sandbox = {};
			vm.runInNewContext(body, sandbox, 'myfile.vm');
			var randNum = Math.round(Math.random() * (sandbox.tumblr_api_read.posts.length - 1));
			var recentPhoto = sandbox.tumblr_api_read.posts[randNum];
			photoData.link = recentPhoto.url;
			photoData.descrip = "Background: <br/>" + recentPhoto['photo-caption'].replace(/(<([^>]+)>)/ig, "");
			download(recentPhoto['photo-url-1280'], "public/images/bg.jpg", function() {
				console.log("downloaded image");
			});
		}
	});
}

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
getMostRecentTweet();
getMostRecentPlay();
getNewBgImage();
setInterval(function() {
	getMostRecentPlay();
}, 2 * ONE_MIN);
setInterval(function() {
	getMostRecentTweet();
}, 4 * ONE_MIN);
setInterval(function() {
	okToDownloadPhoto = true;
}, 15 * ONE_MIN);