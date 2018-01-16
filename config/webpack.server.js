const MinifyPlugin = require(`babel-minify-webpack-plugin`);
const webpack = require(`webpack`);
const externals = require(`webpack-node-externals`)();

const { BabelPlugins, ServerBuildDir, ServerDir, WebpackStatic } = require(`./webpack.common`);

const WebpackPlugins = [
  new webpack.DefinePlugin({ ENV: JSON.stringify(`production`), BUILD_MODE: JSON.stringify(process.env.BUILD_MODE || `prebuilt`) }),
  new MinifyPlugin({ removeDebugger: true, mangle: true }, { comments: false }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
];

const presets = [
  [`env`, {
    targets: { node: `9` },
    forceAllTransforms: true,
    useBuiltIns: `usage`,
  }], `react`,
];

const plugins = [`emotion`, ...BabelPlugins];

const BabelConfig = {
  test: /\.jsx?$|\.js?$/,
  exclude: /node_modules/,
  use: [{
    loader: `babel-loader`,
    options: { presets, plugins, babelrc: false },
  }],
};

module.exports = {
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