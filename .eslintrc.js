module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  rules: {
    'no-alert': 0,
    'no-param-reassign': 'off',
    'no-plusplus': 0,
    'no-iterator': 0,
    'no-restricted-syntax': [2, 'WithStatement'],
    'func-style': 0,
    'no-return-assign': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
  },
  plugins: ['jest'],
};
