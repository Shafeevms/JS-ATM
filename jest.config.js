// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  roots: ['<rootDir>'],
  // Stop running tests after `n` failures
  bail: 0,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|cypress)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!cypress/**',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/jest/coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
      'json',
      'text-summary',
      'clover',
      'html',
  ],

  coveragePathIgnorePatterns: [
      '<rootDir>/node_modules/',
  ],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
      'node_modules',
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
      'js',
      'json',
      'jsx',
      'ts',
      'tsx',
      'node',
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|scss|css)$': '<rootDir>/__mocks__/file-mock.js',
      '~(.*)$': '<rootDir>/$1',
  },

  // The glob patterns Jest uses to detect test files
  testMatch: [
      '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: [
    '<rootDir>/jest/jest.env.js',
  ],
};
