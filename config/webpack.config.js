const CompressionPlugin = require('compression-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

const { BabelPlugins, BabelPresets, WebpackStatic, OutputConfig, AppDir } = require('./webpack.common');

const MinifyConfig = { removeConsole: true, removeDebugger: true };
const CompressionConfig = {
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0
};
const WebpackPlugins = [
  new webpack.DefinePlugin({ ENV: JSON.stringify('production') }),
  new MinifyPlugin(MinifyConfig),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new CompressionPlugin(CompressionConfig),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
  })
];
const ProdPlugins = ['emotion', ...BabelPlugins, ['transform-react-remove-prop-types', { mode: 'remove', removeImport: true }]];
const BabelConfig = {
  test: /\.jsx?$|\.js?$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: { presets: BabelPresets, plugins: ProdPlugins }
  }]
};

module.exports = {
  devtool: 'source-map',
  entry: { app: ['babel-polyfill', `${AppDir}/index`] },
  output: OutputConfig,
  plugins: WebpackPlugins,
  resolve: { extensions: ['.js', '.jsx', '.json'] },
  module: { rules: [BabelConfig, ...WebpackStatic] }
};