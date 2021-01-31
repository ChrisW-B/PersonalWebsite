const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const SRC_PATH = path.resolve(__dirname, 'src', 'server');
const APP_PATH = path.resolve(__dirname, 'src', 'App');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
const HTML_SRC = path.resolve(SRC_PATH, 'index.html');

const config = merge({
  entry: { main: SRC_PATH,  app: APP_PATH },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    sourceMapFilename: '[name].js.map',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [SRC_PATH, NODE_MODULES_PATH],
    alias: {
      '@utils': path.resolve(APP_PATH, 'utils'),
      '@assets': path.resolve(APP_PATH, 'assets'),
      '@hooks': path.resolve(APP_PATH, 'hooks'),
      '@contexts': path.resolve(APP_PATH, 'contexts'),
      '@components': path.resolve(APP_PATH, 'components'),
      '@queries': path.resolve(APP_PATH, 'schema', 'queries', '__generated__'),
      '@schema': path.resolve(APP_PATH, 'schema'),
      '@styles': path.resolve(APP_PATH, 'styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/i,
        exclude: /(\.test.tsx?$|node_modules)/i,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
      },
      { test: /\.svg$/, loader: 'svg-react-loader' },
      {
        test: /\.(ico|png|jpg|gif|eot|ttf|woff|woff2)(\?.+)?$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' },
      },
      { test: /\.html$/, loader: 'raw-loader' },
    ],
  },
  mode: 'production',
});

module.exports = config;
