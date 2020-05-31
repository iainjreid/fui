'use strict'

module.exports = (config) => {
  config.set({
    frameworks: [
      'mocha',
      'should'
    ],

    files: [
      { pattern: 'test/**/*.spec.js', type: 'module' },
      { pattern: 'docs/**/*.js', type: 'module' },
      { pattern: 'lib/**/*.js', type: 'module' },
    ],

    reporters: [ 'coverage-istanbul' ],

    preprocessors: {
      'lib/**/*.js': [ 'karma-coverage-istanbul-instrumenter' ]
    },

    coverageIstanbulInstrumenter: {
      esModules: true
    },

    coverageIstanbulReporter: {
      reports: [ 'text' ]
    }
  })

  if (process.env.CI) {
    process.env.CHROME_BIN = require('puppeteer').executablePath()

    /**
     * Additional CI config
     */
    config.set({
      browsers: [ 'ChromeHeadless' ],
      singleRun: true
    })
  }
}
