const path = require(`path`);

const BuildDir = path.resolve(__dirname, `..`, `public`, `build`, `client`);

module.exports = {
  devtool: `source-map`,
  mode: `production`,
  resolve: { extensions: [`.js`, `.jsx`, `.json`] },
  output: { path: BuildDir, filename: `[name].js`, publicPath: `/build/` },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    quiet: true,
  },
  module: {
    rules: [{
      test: /\.jsx?$|\.js?$/,
      exclude: /node_modules/,
      loader: `babel-loader`,
    }, { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, exclude: /node_modules/, loader: `file-loader?name=fonts/[name].[ext]` },
    { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: `file-loader?name=images/[name].[ext]` },
    ],
  },
};