const MinifyPlugin = require(`babel-minify-webpack-plugin`);
const webpack = require(`webpack`);
const externals = require(`webpack-node-externals`)();

const {
  BabelPlugins, ServerBuildDir, ServerDir, WebpackStatic,
} = require(`./webpack.common`);

const WebpackPlugins = [
  new MinifyPlugin({ removeDebugger: true, mangle: false }, { comments: false }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
];

const presets = [
  [
    `@babel/env`,
    {
      targets: { node: `current` },
      forceAllTransforms: true,
      useBuiltIns: `usage`,
    },
  ],
  `@babel/react`,
];

const plugins = [`emotion`, ...BabelPlugins];

const BabelConfig = {
  test: /\.jsx?$|\.js?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: `babel-loader`,
      options: { presets, plugins, babelrc: false },
    },
  ],
};

module.exports = {
  mode: `production`,
  entry: `${ServerDir}`,
  output: { path: ServerBuildDir, filename: `index.js` },
  plugins: WebpackPlugins,
  resolve: { extensions: [`.js`, `.jsx`, `.json`] },
  module: { rules: [BabelConfig, ...WebpackStatic] },
  target: `async-node`,
  externals,
  node: {
    __dirname: false,
  },
};