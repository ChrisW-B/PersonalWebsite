const config = require('./config'),
  Twitter = require('twitter'),
  express = require('express'),
  twitterText = require('twitter-text'),
  Lastfm = require('lastfm-njs'),
  bodyParser = require('body-parser'),
  request = require('request'),
  compression = require('compression'),
  path = require('path'),
  app = express(),
  scribe = require('scribe-js')(),
  console = process.console;

const ONE_MIN = 60 * 1000,
  ONE_DAY = ONE_MIN * 60 * 24;

let twitterClient = new Twitter({
    consumer_key: config.twitter.consumerKey,
    consumer_secret: config.twitter.consumerSecret,
    access_token_key: config.twitter.accessToken,
    access_token_secret: config.twitter.accessSecret
  }),
  lastFmClient = new Lastfm({
    apiKey: config.lastfm.apiKey,
    apiSecret: config.lastfm.apiSecret
  }),
  recentPhoto = {};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: ONE_DAY
}));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(compression());
app.use(scribe.express.logger(console)); // Log each request
app.use('/logs', scribe.webPanel());
app.get('/', function (req, res) {
  res.render('pages/index');
});
app.get('/twitter', function (req, res) {
  console.log('getting recent tweet');
  const params = {
    screen_name: 'ChrisW_B',
    count: 20, // make sure we get enough to ignore RTs
    exclude_replies: true,
    include_rts: false
  };
  twitterClient.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      const newTweet = tweets[0];
      res.send({
        success: true,
        text: twitterText.autoLink(newTweet.text, {
          urlEntities: newTweet.entities.urls
        }),
        time: relativeTimeDifference(new Date(newTweet.created_at)),
        link: 'https://twitter.com/statuses/' + newTweet.id_str
      });
      console.log('got tweet');
    } else {
      res.send({
        success: false
      });
    }
  });
});

app.get('/bg', function (req, res) {
  request(`https://photo.chriswbarry.com/ghost/api/v0.1/posts?client_id=${config.ghost.id}&client_secret=${config.ghost.secret}&limit=7&fields=feature_image,url,title`,
    function (error, result, json) {
      if (!error && result.statusCode === 200) {
        const posts = JSON.parse(json).posts;
        const randNum = Math.round(Math.random() * (posts.length - 1));
        recentPhoto = posts[randNum];
        recentPhoto.url = `https://photo.chriswbarry.com${recentPhoto.url}`;
        if (!recentPhoto.image.includes('http')) {
          recentPhoto.image = `https://photo.chriswbarry.com${recentPhoto.feature_image}`;
        }
        request(recentPhoto.image).pipe(res);
      } else {
        res.sendStatus(404);
      }
    }
  );
});

app.get('/bginfo', function (req, res) {
  setTimeout(function () {
    if (recentPhoto !== undefined && recentPhoto !== '') {
      res.send({
        success: true,
        link: recentPhoto.url,
        descrip: 'Background: <br/>' + recentPhoto.title
      });
    } else {
      res.send({
        success: false
      });
    }
  }, 1000); // give /bg time to get a photo
});

app.get('/lastfm', function (req, res) {
  console.log('getting recent play');
  lastFmClient.user_getRecentTracks({
    user: 'Christo27',
    limit: 1
  }).then(recentTracks => {
    const lastTrack = recentTracks.track[0];
    if (lastTrack !== undefined && lastTrack['@attr'].nowplaying) {
      console.log('updated now playing');
      res.send({
        success: true,
        text: '♫ ' + lastTrack.name + ' by ' + lastTrack.artist['#text']
      });
    }
  }).catch(() => {
    res.send({
      success: false
    });
  });
});

app.listen(4737, function () {
  console.log('Running on port 4737!');
});

function relativeTimeDifference(previous) {
  // based on http://stackoverflow.com/a/6109105/6465731
  const current = new Date(),
    msPerMinute = 60 * 1000,
    msPerHour = msPerMinute * 60,
    msPerDay = msPerHour * 24,
    msPerMonth = msPerDay * 30,
    msPerYear = msPerDay * 365,
    elapsed = current - previous;
  let num = 0,
    unit = '',
    approx = '';
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
  if (num !== 1) {
    unit += 's';
  }
  return approx + ' ' + num + ' ' + unit + ' ago';
}