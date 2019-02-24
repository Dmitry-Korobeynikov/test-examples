// Jest configuration
// https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
  cacheDirectory: './.cache/jest',

  coverageDirectory: 'logs/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
  ],

  globals: {
    __SNF__: false,
  },

  transform: {
    '\\.(js|jsx|mjs)$': '<rootDir>/jest-utils/babel-transformer.js',
    '^(?!.*\\.(json|css|less|styl|scss|sass|sss)$)': '<rootDir>/jest-utils/file-transformer.js',
  },

  testMatch: [
    '<rootDir>/src/**/__tests__/**/*-test.js?(x)',
  ],

  // change to `setupFilesAfterEnv: ['<rootDir>/setup-tests.js']` for jest v.24.0 and later
  setupTestFrameworkScriptFile: '<rootDir>/setup-tests.js',

  snapshotSerializers: ['enzyme-to-json/serializer'],
};
