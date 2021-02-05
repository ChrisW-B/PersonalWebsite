const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const config = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]~[chunkhash].bundle.js',
    chunkFilename: '[name]~[chunkhash].bundle.js',
    sourceMapFilename: '[name]~[chunkhash].js.map',
    publicPath: '/',
  },
  optimization: {
    chunkIds: 'named',
    runtimeChunk: true,
    splitChunks: {
      name: false,
      chunks: 'all',
      maxInitialRequests: Number.POSITIVE_INFINITY,
      maxAsyncRequests: Number.POSITIVE_INFINITY,
    },
  },
  devtool: 'source-map',
  mode: 'production',
});

module.exports = config;
