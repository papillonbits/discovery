// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/setup/jest').getJestSetup

const testPathIgnorePatterns = process.env.NODE_ENV === 'test' ? ['packages/core/webpack.test.babel.js'] : ['packages/core']
const coverageDirectory = './.coverage/'
const collectCoverage = process.env.NODE_ENV === 'test'
const collectCoverageFrom = [
  '!**/.coverage/**',
  '!**/.husky/**',
  '!**/.mock/**',
  '!**/.storybook/**',
  '!**/.storybook-static/**',
  '!**/node_modules/**',
  'packages/**/*.{js,jsx}',
  '!packages/**/index.js',
  '!packages/**/*.prop.js',
  '!packages/**/*.story.js',
  '!packages/**/*.test.js',
  '!packages/**/build/**',
  '!packages/**/node_modules/**',
  '!packages/**/webpack*',
]
const coverageThreshold = {
  global: {
    statements: 21,
    branches: 3,
    functions: 11,
    lines: 21,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })
