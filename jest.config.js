// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/library/jest').getJestSetup

const testPathIgnorePatterns = process.env.NODE_ENV === 'test' ? ['packages/core/webpack.test.babel.js'] : ['packages/core']
const coverageDirectory = './.coverage/'
const collectCoverage = process.env.NODE_ENV === 'test'
const collectCoverageFrom = [
  '!**/coverage/**',
  '!**/node_modules/**',
  'packages/**/*.{js,jsx}',
  '!packages/**/index.js',
  '!packages/**/*.prop.js',
  '!packages/**/*.story.js',
  '!packages/**/*.test.js',
  '!packages/**/build/**',
  '!packages/**/node_modules/**',
  '!packages/**/webpack*',
  '!packages/**/src/mock/*',
  '!packages/core/src/library/**',
  '!packages/core/src/pattern/atom/**',
  '!packages/core/src/pattern/molecule/**',
  '!packages/core/src/pattern/organism/**',
  '!packages/core/src/pattern/template/**',
  '!packages/core/src/pattern/page/**',
  '!packages/core/src/state/**',
  '!packages/core/src/store/reducer/**',
  '!packages/core/src/store/thunk/**',
]
const coverageThreshold = {
  global: {
    statements: 99,
    branches: 100,
    functions: 100,
    lines: 99,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })
