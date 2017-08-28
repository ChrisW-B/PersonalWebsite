// server/index.js

require('colors');
const config = require('./config'),
  Twitter = require('twitter'),
  express = require('express'),
  twitterText = require('twitter-text'),
  Lastfm = require('lastfm-njs'),
  bodyParser = require('body-parser'),
  fetch = require('node-fetch'),
  compression = require('compression'),
  path = require('path'),
  winston = require('winston'),
  expressWinston = require('express-winston'),

  ONE_MIN = 60 * 1000,
  ONE_DAY = ONE_MIN * 60 * 24,

  twitterClient = new Twitter({
    consumer_key: config.twitter.consumerKey,
    consumer_secret: config.twitter.consumerSecret,
    access_token_key: config.twitter.accessToken,
    access_token_secret: config.twitter.accessSecret
  }),
  lastFmClient = new Lastfm({
    apiKey: config.lastfm.apiKey,
    apiSecret: config.lastfm.apiSecret
  }),
  logger = new(winston.Logger)({
    level: 'server',
    levels: { server: 0, twitter: 0, lastfm: 0, bg: 0 },
    colors: { server: 'green', twitter: 'blue', lastfm: 'yellow', bg: 'magenta' },
    colorize: true,
    transports: [
      new(winston.transports.Console)({ 'timestamp': true, 'prettyPrint': true, colorize: true })
    ]
  }),
  app = express();

if (process.env.BUILD_MODE !== 'prebuilt') {
  const webpackConfig = require('../webpack.dev.config.js');
  const compiler = require('webpack')(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));
  app.use(require('webpack-hot-middleware')(compiler, {
    reload: true,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
} else {
  app.get('*.js', (req, res, next) => {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');
    res.set('Vary', 'Accept-Encoding');
    next();
  });

  app.get('/build/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/build', 'app.js'));
  });
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public'), { maxAge: ONE_DAY }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(expressWinston.logger({
  transports: [new winston.transports.Console({ 'timestamp': true, colorize: true })],
  expressFormat: true,
  meta: false,
  colorize: true
}));
app.get('/', function (req, res) {
  res.render('pages/index');
});

app.get('/twitter', async(req, res) => {
  logger.twitter('getting recent tweet');
  const params = {
    screen_name: 'ChrisW_B',
    count: 20, // make sure we get enough to ignore RTs
    exclude_replies: true,
    include_rts: false
  };
  try {
    const newTweet = (await twitterClient.get('statuses/user_timeline', params))[0];
    res.send({
      success: true,
      text: twitterText.autoLink(newTweet.text, {
        urlEntities: newTweet.entities.urls
      }),
      time: relativeTimeDifference(new Date(newTweet.created_at)),
      link: 'https://twitter.com/statuses/' + newTweet.id_str
    });
    logger.twitter('got tweet');
  } catch (e) {
    logger.twitter('no tweet!', e);
    res.send({ success: false, e });
  }
});

app.get('/bg', async(req, res) => {
  logger.bg('getting a background');
  try {
    const posts = (await (await fetch(`https://photo.chriswbarry.com/ghost/api/v0.1/posts?client_id=${config.ghost.id}&client_secret=${config.ghost.secret}&limit=7&fields=feature_image,url,title`)).json()).posts;
    const recentPhoto = posts[Math.round(Math.random() * (posts.length - 1))];
    recentPhoto.url = `https://photo.chriswbarry.com${recentPhoto.url}`;
    if (!recentPhoto.feature_image.includes('http')) {
      recentPhoto.feature_image = `https://photo.chriswbarry.com${recentPhoto.feature_image}`;
    }
    res.send({
      success: true,
      ...recentPhoto
    });
    logger.bg('got bg');
  } catch (e) {
    logger.bg('no bg!', e);
    res.send({ success: false, e });
  }
});

app.get('/lastfm', async(req, res) => {
  logger.lastfm('getting recent play');
  try {
    const lastTrack = (await lastFmClient.user_getRecentTracks({
      user: 'Christo27',
      limit: 1
    })).track[0];
    if (lastTrack !== undefined && lastTrack['@attr'].nowplaying) {
      logger.lastfm('got now playing');
      res.send({
        success: true,
        text: '♫ ' + lastTrack.name + ' by ' + lastTrack.artist['#text']
      });
    }
  } catch (e) {
    logger.lastfm('no track!', e);
    res.send({ success: false, e });
  }
});

app.post('/postrecieve', (req, res) => {
  const { commits } = req.body;
  if (commits.length > 0) {
    const exec = require('child_process').exec;
    exec(`cd ${path.join(__dirname, '..')}; git pull; yarn; yarn cleanup; yarn build`);
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('success');
  res.end();
});

app.get('*', (req, res) => res.redirect('/'));

app.listen(4737, () => logger.server('Listening on port 4737!\n'.rainbow + 'http://localhost:4737/'));

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