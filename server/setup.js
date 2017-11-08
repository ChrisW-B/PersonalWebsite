import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import winston from 'winston';
import expressWinston from 'express-winston';

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

module.exports = app;