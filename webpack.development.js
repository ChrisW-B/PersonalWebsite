const path = require('path');

const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const SRC_PATH = path.resolve(__dirname, 'src', 'App');
const BUILD_PATH = path.join(__dirname, './build');
const PORT = process.env.PORT || 8000;

const config = merge(commonConfig, {
  entry: ['react-hot-loader/patch', SRC_PATH],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: { path: BUILD_PATH, filename: '[name].[hash].js', publicPath: '/' },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: PORT,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    quiet: true,
    noInfo: true,
    stats: 'errors-only',
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  plugins: [new FriendlyErrorsWebpackPlugin()],
});

module.exports = config;
