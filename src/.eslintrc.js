const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@emotion', '@typescript-eslint', 'react-hooks', 'react'],
  extends: [
    '../.eslintrc.js',
    'airbnb/hooks',

    'plugin:@typescript-eslint/recommended',

    'prettier/@typescript-eslint',

    'prettier/react',
  ],
  parserOptions: {
    project: [path.resolve(__dirname, '..', 'tsconfig.json')],
    sourceType: 'module',
    extraFileExtensions: ['.yaml', '.json', '.yml', '.gql', '.html', '.graphql'],
  },
  env: { es2020: true },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
  },
};
