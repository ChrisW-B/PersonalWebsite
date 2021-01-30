module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }],
      ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 'core-js@3', modules: false }],
      '@babel/preset-typescript',
    ],
    sourceType: 'unambiguous',
    plugins: [
      '@emotion',
      '@babel/proposal-class-properties',
      '@babel/proposal-optional-chaining',
      '@babel/syntax-dynamic-import',
      '@babel/transform-runtime',
    ].filter(Boolean),
    env: {
      development: {
        plugins: ['react-refresh/babel'],
      },
    },
  };
};
