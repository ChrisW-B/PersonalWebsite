const path = require('path');

const merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');
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
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'eslint-loader',
        include: SRC_PATH,
        exclude: /(\.test.ts$|node_modules)/,
        options: { cache: true },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new StyleLintPlugin({ lintDirtyModulesOnly: true, files: './src/**/*.{js,jsx,html}' }),
  ],
});

module.exports = config;
