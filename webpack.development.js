/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const { merge } = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const SRC_PATH = path.resolve(__dirname, 'src', 'App');
const BUILD_PATH = path.join(__dirname, './build');

const config = merge(commonConfig, {
  entry: [SRC_PATH],
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  output: { path: BUILD_PATH, filename: '[name].[contenthash].js', publicPath: '/' },
  devServer: {
    disableHostCheck: true,
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    overlay: true,
    quiet: true,
    stats: 'errors-only',
  },
  plugins: [new FriendlyErrorsWebpackPlugin(), new ReactRefreshWebpackPlugin()],
});

module.exports = config;
