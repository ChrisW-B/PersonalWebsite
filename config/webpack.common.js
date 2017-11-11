const path = require('path');

const BuildDir = path.resolve(__dirname, '..', 'public', 'build', 'client');
const ServerBuildDir = path.resolve(__dirname, '..', 'public', 'build', 'server');
const AppDir = path.resolve(__dirname, '..', 'client');
const ServerDir = path.resolve(__dirname, '..', 'server');

const BabelPresets = [
  ['env', { targets: { browsers: ['> 2%'] } }], 'react'
];

const BabelPlugins = ['transform-object-rest-spread', 'transform-export-extensions', 'transform-class-properties'];

const WebpackStatic = [
  { test: /\.json?$/, loader: 'json-loader', exclude: /node_modules/ },
  { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, exclude: /node_modules/, loader: 'file-loader?name=fonts/[name].[ext]' },
  { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'file-loader?name=images/[name].[ext]' }
];

const OutputConfig = { path: BuildDir, filename: '[name].js', publicPath: '/build/' };

module.exports = { BabelPlugins, BabelPresets, WebpackStatic, OutputConfig, AppDir, ServerBuildDir, ServerDir };