import path from 'path';

import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';

const app = express();

const publicPath = process.env.NODE_ENV === `production` ? path.join(__dirname, `..`, `..`) : path.join(__dirname, `..`, `public`);

app.set(`view engine`, `ejs`);
app.use(express.static(publicPath, { maxage: `7d` }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

/* eslint-disable global-require, import/no-extraneous-dependencies */
if (process.env.NODE_ENV === `production`) {
  const winston = require(`winston`);
  app.use(
    require(`express-winston`).logger({
      transports: [new winston.transports.Console({ timestamp: true, colorize: true })],
      expressFormat: true,
      meta: false,
      colorize: true
    })
  );
}
if (process.env.NODE_ENV !== `production`) {
  const devMiddleware = require(`webpack-dev-middleware`);
  const hotMiddleware = require(`webpack-hot-middleware`);
  const webpackConfig = require(`../config/webpack.client.dev`);
  const compiler = require(`webpack`)(webpackConfig);

  app.use(
    devMiddleware(compiler, {
      hot: true,
      open: true,
      noInfo: true,
      historyApiFallback: true,
      logLevel: `silent`,
      publicPath: path.join(webpackConfig.output.publicPath, `client`)
    })
  );
  app.use(
    hotMiddleware(compiler, {
      log: false
    })
  );

  // app.use(require("webpack-dev-middleware")(compiler, {
  //   quiet: true,
  //   compress: true,
  //   overlay: true,
  //   historyApiFallback: true,
  //   publicPath: webpackConfig.output.publicPath
  // }));
  // app.use(require("webpack-hot-middleware")(compiler, {
  //   path: `/__webpack_hmr`,
  //   log: false,
  //   overlay: true,
  //   reload: true,
  //   noInfo: true,
  //   quiet: true,
  //   overlayWarnings: true
  // }));
}

export default app;
