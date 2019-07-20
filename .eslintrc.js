module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    // Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __dirname: 'readonly',
    require: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-cond-assign': 0,
  },
};
