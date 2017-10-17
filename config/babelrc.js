const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const plugins = [
  [`emotion`, { sourceMap: env === `production` }], `transform-object-rest-spread`, `transform-export-extensions`, `transform-class-properties`
];
const presets = [`env`, `react`];
module.exports = { plugins, presets };