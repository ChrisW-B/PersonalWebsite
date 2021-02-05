module.exports = {
  extends: ['airbnb', 'eslint:recommended', 'prettier', 'prettier/babel'],
  env: { es2020: true },
  settings: { 'import/resolver': { webpack: { config: 'webpack.development.js' } } },
  rules: {
    'import/extensions': [
      'error',
      'never',
      { pattern: { html: 'always', json: 'always', gql: 'always' } },
    ],
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'off',
  },
};
