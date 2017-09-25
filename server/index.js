// server/index.js
require('dotenv').config();
const Twitter = require('twitter');
const express = require('express');
const twitterText = require('twitter-text');
const Lastfm = require('lastfm-njs');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const compression = require('compression');
const path = require('path');
const winston = require('winston');
const expressWinston = require('express-winston');
const crypto = require('crypto');
const { spawn } = require('child_process');

const ONE_MIN = 60 * 1000;
const ONE_DAY = ONE_MIN * 60 * 24;

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});
const lastFmClient = new Lastfm({
  apiKey: process.env.LASTFM_KEY,
  apiSecret: process.env.LASTFM_SECRET
});
const logger = new (winston.Logger)({
  level: 'server',
  levels: { server: 0, twitter: 0, lastfm: 0, bg: 0, github: 0 },
  colors: { server: 'green', twitter: 'blue', lastfm: 'yellow', bg: 'magenta', github: 'red' },
  colorize: true,
  transports: [
    new (winston.transports.Console)({ timestamp: true, prettyPrint: true, colorize: true })
  ]
});
const app = express();

const relativeTimeDifference = (previous) => {
  // based on http://stackoverflow.com/a/6109105/6465731
  const current = new Date();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = current - previous;
  let num = 0;
  let unit = '';
  let approx = '';
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
    num = `approximately ${Math.round(elapsed / msPerDay)}`;
    unit = 'day';
    approx = 'approximately';
  } else if (elapsed < msPerYear) {
    num = `approximately ${Math.round(elapsed / msPerMonth)}`;
    unit = 'month';
    approx = 'approximately';
  } else {
    num = `approximately${Math.round(elapsed / msPerYear)}`;
    unit = 'year';
    approx = 'approximately';
  }
  if (num !== 1) {
    unit += 's';
  }
  return `${approx} ${num} ${unit} ago`;
};

if (process.env.BUILD_MODE !== 'prebuilt') {
  const webpackConfig = require('../webpack.dev.config.js'); // eslint-disable-line global-require
  const compiler = require('webpack')(webpackConfig); // eslint-disable-line global-require
  app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line global-require
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));
  app.use(require('webpack-hot-middleware')(compiler, { // eslint-disable-line global-require
    reload: true,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
} else {
  app.get('*.js', (req, res, next) => {
    req.url += '.gz';
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
  transports: [new winston.transports.Console({ timestamp: true, colorize: true })],
  expressFormat: true,
  meta: false,
  colorize: true
}));
app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/twitter', async (req, res) => {
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
      link: `https://twitter.com/statuses/${newTweet.id_str}`
    });
    logger.twitter('got tweet');
  } catch (e) {
    logger.twitter('no tweet!', e);
    res.send({ success: false, e });
  }
});

app.get('/github', async (req, res) => {
  logger.github('getting recent commit');
  const githubRes = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    'Content-Type': 'application/json',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    },
    body: JSON.stringify({ query: '{viewer{repositories(first:1 orderBy: {field: PUSHED_AT, direction: DESC} affiliations:[OWNER, COLLABORATOR, ORGANIZATION_MEMBER]){nodes{url nameWithOwner refs(first: 50 refPrefix: "refs/heads/"){nodes{name target{ ... on Commit{history(first: 1){edges{node{committedDate messageHeadlineHTML messageBodyHTML}}}}}}}}}}}' }) // best way I know of to get all of the refs
  });
  try {
    const githubJson = await githubRes.json();
    logger.github('got commits, now to sort');
    const repository = githubJson.data.viewer.repositories.nodes[0];
    const { url, nameWithOwner, refs: { nodes: refs } } = repository;
    const commits = refs.map((ref) => {
      const {
        messageHeadlineHTML,
        messageBodyHTML,
        committedDate
      } = ref.target.history.edges[0].node;
      return {
        success: true,
        link: `${url}/tree/${ref.name}`,
        repo: `${nameWithOwner}#${ref.name}`,
        message: `${messageHeadlineHTML}${messageBodyHTML ? '\n' : ''}${messageBodyHTML}`,
        time: committedDate
      };
    });
    commits.sort((a, b) => new Date(b.time) - new Date(a.time));
    const mostRecentCommit = commits[0];
    res.send({
      ...mostRecentCommit,
      time: relativeTimeDifference(new Date(mostRecentCommit.time))
    });
  } catch (e) {
    logger.github('no commit!', e);
    res.send({ success: false, e });
  }
});

app.get('/bg', async (req, res) => {
  logger.bg('getting a background');
  try {
    const posts = (await (await fetch(`https://photo.chriswbarry.com/ghost/api/v0.1/posts?client_id=${process.env.GHOST_ID}&client_secret=${process.env.GHOST_SECRET}&limit=7&fields=feature_image,url,title`)).json()).posts;
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

app.get('/lastfm', async (req, res) => {
  logger.lastfm('getting recent play');
  const recentTrack = (await lastFmClient.user_getRecentTracks({
    user: 'Christo27',
    limit: 1
  })).track;
  if (recentTrack.length && recentTrack[0]['@attr'] && recentTrack[0]['@attr'].nowplaying) {
    const lastTrack = recentTrack[0];
    logger.lastfm('got now playing');
    return res.send({
      success: true,
      text: `♫ ${lastTrack.name} by ${lastTrack.artist['#text']}`
    });
  }
  logger.lastfm('no track!');
  return res.send({ success: false });
});

const ensureGithub = (req, res, next) => {
  if (!req.headers['user-agent'].includes('GitHub-Hookshot')) res.redirect(301, '/');
  const hmac = crypto.createHmac('sha1', process.env.GITHUB_SECRET);
  const ourSignature = `sha1=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;
  const theirSignature = req.get('X-Hub-Signature');
  if (crypto.timingSafeEqual(Buffer.from(ourSignature, 'utf8'), Buffer.from(theirSignature, 'utf8'))) return next();
  return res.redirect(301, '/');
};

app.post('/postrecieve', ensureGithub, (req, res) => {
  const cwd = path.join(__dirname, '..');
  const updateFile = path.join(cwd, 'scripts', 'update.sh');
  logger.server(`running ${updateFile}`);
  spawn('sh', [updateFile], {
    cwd,
    env: Object.assign({}, process.env, { PATH: `${process.env.PATH} :/usr/local/bin` })
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Thanks GitHub <3');
});

app.get('*', (req, res) => res.redirect('/'));

app.listen(4737, () => logger.server('Listening on port 4737!\n http://localhost:4737/'));