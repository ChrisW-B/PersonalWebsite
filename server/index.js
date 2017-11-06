// server/index.js

import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import winston from 'winston';
import expressWinston from 'express-winston';
import crypto from 'crypto';
import { spawn } from 'child_process';
import graphqlHTTP from 'express-graphql';
import Html from './components/html';
import Api from './api';
import { logger } from './utils';
import graphqlSchema from '../../../db/graphql';

require(`dotenv`).config();
require(`babel-polyfill`);

const app = express();

app.set(`view engine`, `ejs`);
app.use(express.static(path.join(__dirname, `..`, `..`), { maxage: `7d` }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(expressWinston.logger({
  transports: [new winston.transports.Console({ timestamp: true, colorize: true })],
  expressFormat: true,
  meta: false,
  colorize: true
}));

if (process.env.BUILD_MODE !== `prebuilt`) {
  /* eslint-disable */ // there's just so much here
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../../config/webpack.dev.config.js');
  const compiler = require('webpack')(webpackConfig);

  app.use(devMiddleware(compiler, {
    hot: true,
    publicPath: '/build/client',
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));
  app.use(hotMiddleware(compiler, {
    reload: true,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
  /* eslint-enable */
}

app.use(`/graphql`, graphqlHTTP({ schema: graphqlSchema, graphiql: true }));

app.get(`/`, (req, res) => res.send(Html()));

app.use(Api);

const ensureGithub = (req, res, next) => {
  if (!req.headers[`user-agent`].includes(`GitHub-Hookshot`)) res.redirect(301, `/`);
  const hmac = crypto.createHmac(`sha1`, process.env.GITHUB_SECRET);
  const ourSignature = `sha1=${hmac.update(JSON.stringify(req.body)).digest(`hex`)}`;
  const theirSignature = req.get(`X-Hub-Signature`);
  if (crypto.timingSafeEqual(Buffer.from(ourSignature, `utf8`), Buffer.from(theirSignature, `utf8`))) return next();
  return res.redirect(301, `/`);
};

app.post(`/postrecieve`, ensureGithub, (req, res) => {
  const cwd = path.join(__dirname, `..`);
  const updateFile = path.join(cwd, `scripts`, `update.sh`);
  logger.server(`running ${updateFile}`);
  spawn(`sh`, [updateFile], {
    cwd,
    env: Object.assign({}, process.env, { PATH: `${process.env.PATH} :/usr/local/bin` })
  });
  res.writeHead(200, { 'Content-Type': `text/plain` });
  res.end(`Thanks GitHub <3`);
});

app.get(`*`, (req, res) => res.redirect(`/`));

app.listen(4737, () => logger.server(`Listening on port 4737!\n http://localhost:4737/`));