var config = require('./config'),
	http = require('http'),
	Twitter = require('twitter'),
	express = require('express'),
	app = express(),
	twitterText = require('twitter-text'),
	Lastfm = require('simple-lastfm'),
	bodyParser = require('body-parser'),
	scribe = require('scribe-js')({
		createDefaultlog: false
	}),
	console = process.log;
var logger = scribe.console({
	logWriter: {
		rootPath: '../logs'
	}
});
var lex = require('letsencrypt-express').create({
	// set to https://acme-v01.api.letsencrypt.org/directory in production
	server: 'https://acme-v01.api.letsencrypt.org/directory',
	challenges: {
		'http-01': require('le-challenge-fs').create({
			webrootPath: '/tmp/acme-challenges'
		})
	},
	store: require('le-store-certbot').create({
		webrootPath: '/tmp/acme-challenges'
	}),
	approveDomains: ['chriswbarry.com'],
	email: 'me@chriswbarry.com',
	agreeTos: true
});
require('http').createServer(lex.middleware(require('redirect-https')())).listen(80, function() {
	logger.log("Listening for ACME http-01 challenges on", this.address());
});
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(scribe.express.logger(logger)); //Log each request
app.use('/logs', scribe.webPanel());
app.get('/', function(req, res) {
	res.render('pages/index', {
		lastTweet: recentTweet.text,
		tweetTime: relativeTimeDifference(new Date(recentTweet.time)),
		tweetLink: recentTweet.link,
		lastPlay: recentPlay
	});
});
require('https').createServer(lex.httpsOptions, lex.middleware(app)).listen(443, function() {
	logger.log("Listening for ACME tls-sni-01 challenges and serve app on", this.address());
});
var twitterClient = new Twitter({
	consumer_key: config.twitter.consumerKey,
	consumer_secret: config.twitter.consumerSecret,
	access_token_key: config.twitter.accessToken,
	access_token_secret: config.twitter.accessSecret
});
var lastFmClient = new Lastfm({
	api_key: config.lastfm.apiKey,
	api_secret: config.lastfm.apiSecret
});
var recentTweet = {};
var recentPlay = "";

function getMostRecentTweet() {
	logger.log("getting recent tweet");
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
			logger.log("updated tweet");
		} else {
			logger.log(error);
		}
	});
}

function getMostRecentPlay() {
	logger.log("getting recent play");
	lastFmClient.getRecentTracks({
		user: 'Christo27',
		limit: 1,
		callback: function(result) {
			recentPlay = "";
			if (result.success) {
				var lastTrack = result.recentTracks[0];
				if (lastTrack !== undefined && lastTrack['@'].nowplaying) {
					logger.log("updated now playing");
					recentPlay = "♫ " + lastTrack.name + " by " + lastTrack.artist['#'];
				}
			}
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
getMostRecentTweet();
getMostRecentPlay();
setInterval(function() {
	getMostRecentTweet();
	getMostRecentPlay();
}, 120000);