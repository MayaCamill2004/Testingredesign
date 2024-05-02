// Karma configuration
// Generated on Tue Apr 30 2024 14:28:19 GMT+0200 (Central European Summer Time)

module.exports = function(config) {
  config.set({

      // base path that will be used to resolve all patterns (e.g. files, exclude)
      basePath: '',

      // frameworks to use
      // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
      frameworks: ['jasmine'],

      // list of files / patterns to load in the browser
      files: [
          // Specify the files to include in the tests here
      ],

      // list of files / patterns to exclude
      exclude: [
          // Specify the files to exclude from the tests here
      ],

      // preprocess matching files before serving them to the browser
      // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
      preprocessors: {
          // Add preprocessors here
      },

      // test results reporter to use
      // possible values: 'dots', 'progress', 'coverage'
      // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
      reporters: ['progress', 'coverage'],

      // Configuration for the coverage reporter
      coverageIstanbulReporter: {
          dir: require('path').join(__dirname, 'coverage'),
          reports: ['html', 'lcovonly', 'text-summary'],
          fixWebpackSourcePaths: true
      },

      // web server port
      port: 9876,

      // enable / disable colors in the output (reporters and logs)
      colors: true,

      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,

      // start these browsers
      // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
      browsers: ['Chrome'],

      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,

      // Concurrency level
      // how many browser instances should be started simultaneously
      concurrency: Infinity
  });
};
