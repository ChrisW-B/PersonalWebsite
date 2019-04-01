const externals = require(`webpack-node-externals`)();
const path = require(`path`);

const ServerBuildDir = path.resolve(__dirname, `..`, `public`, `build`, `server`);
const ServerDir = path.resolve(__dirname, `..`, `server`);

module.exports = {
  mode: `production`,
  entry: `${ServerDir}`,
  output: { path: ServerBuildDir, filename: `index.js` },
  resolve: { extensions: [`.js`, `.jsx`, `.json`] },
  module: {
    rules: [
      {
        test: /\.jsx?$|\.js?$/,
        exclude: /node_modules/,
        loader: `babel-loader`
      },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, exclude: /node_modules/, loader: `file-loader?name=fonts/[name].[ext]` },
      { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: `file-loader?name=images/[name].[ext]` }
    ]
  },
  target: `async-node`,
  externals,
  node: {
    __dirname: false
  }
};
