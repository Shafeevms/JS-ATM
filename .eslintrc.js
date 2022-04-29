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
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': 0,
    'no-iterator': 0,
    'no-restricted-syntax': [2, 'WithStatement'],
    'func-style': 0,
  },
  plugins: ['jest'],
};
