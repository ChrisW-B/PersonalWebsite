const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const mode = process.env.NODE_ENV || 'production';

const config = merge(commonConfig, {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  mode,
});

module.exports = config;
