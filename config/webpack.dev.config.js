const webpack = require(`webpack`);
const { BabelPlugins, BabelPresets, WebpackStatic, OutputConfig, AppDir } = require(`./webpack.common`);

const WebpackPlugins = [
  new webpack.DefinePlugin({ ENV: JSON.stringify(`development`) }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProgressPlugin()
];
const WebpackPre = [
  { enforce: `pre`, test: /\.js$/, exclude: /node_modules/, loader: `eslint-loader` },
  { enforce: `pre`, test: /\.js$/, exclude: /node_modules/, loader: `stylelint-custom-processor-loader` }
];
const DevPlugins = [
  [`emotion`, { sourceMap: true }], ...BabelPlugins
];
const BabelConfig = {
  test: /\.jsx?$|\.js?$/,
  exclude: /node_modules/,
  use: [{
    loader: `babel-loader`,
    options: { presets: BabelPresets, plugins: DevPlugins }
  }]
};
const HMRConfig = {
  hotUpdateChunkFilename: `hot/[hash].hot-update.js`,
  hotUpdateMainFilename: `hot/[hash].hot-update.json`,
  devtoolModuleFilenameTemplate: `webpack:///[absolute-resource-path]`
};

module.exports = {
  entry: { app: [`babel-polyfill`, `webpack-hot-middleware/client?name=app`, `${AppDir}/index`] },
  output: { ...OutputConfig, ...HMRConfig },
  devtool: `cheap-module-source-map`,
  plugins: WebpackPlugins,
  module: { rules: [...WebpackPre, BabelConfig, ...WebpackStatic] }
};