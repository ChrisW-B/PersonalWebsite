import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import winston from 'winston';
import expressWinston from 'express-winston';

const app = express();

const publicPath = process.env.NODE_ENV === `production`
  ? path.join(__dirname, `..`, `..`)
  : path.join(__dirname, `..`, `public`);

app.set(`view engine`, `ejs`);
app.use(express.static(publicPath, { maxage: `7d` }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(expressWinston.logger({
  transports: [new winston.transports.Console({ timestamp: true, colorize: true })],
  expressFormat: true,
  meta: false,
  colorize: true,
}));

if (process.env.NODE_ENV !== `production`) {
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const devMiddleware = require(`webpack-dev-middleware`);
  const hotMiddleware = require(`webpack-hot-middleware`);
  const webpackConfig = require(`../config/webpack.dev`);
  const compiler = require(`webpack`)(webpackConfig);

  app.use(devMiddleware(compiler, {
    hot: true,
    publicPath: `/build/client`,
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));
  app.use(hotMiddleware(compiler, {
    reload: true,
    path: `/__webpack_hmr`,
    heartbeat: 10 * 1000,
  }));
}

export default app;