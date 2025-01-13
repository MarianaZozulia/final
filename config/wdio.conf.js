const moment = require('moment');

exports.config = {

    runner: 'local',
    specs:  ['./tests/**/*.js'],
    exclude: [],
    maxInstances: 5,
    capabilities: [{
        browserName: process.env.BROWSER || 'chrome', 
        'goog:chromeOptions': { args: ['--headless', '--disable-gpu'] },
    }],
    suites: {
        smoke: ['./tests/smoke/*.spec.js'],
        other: ['./tests/other/*.spec.js'], 
    },
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://cloud.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
        ['spec', { symbols: { passed: '[PASS]', failed: '[FAIL]' } }],
      ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    beforeSession: function (config, capabilities, specs) {
        const suite = process.env.SUITE; // Параметр SUITE
        if (suite && config.suites[suite]) {
          config.specs = config.suites[suite];
        }
      },
      afterTest: async function (test, context, { error }) {
        if (error) {
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
          const screenshotPath = `./reports/screenshots/${test.title}-${timestamp}.png`;
          await browser.saveScreenshot(screenshotPath);
        }
      },
    
    onComplete: function () {
        console.log('Test execution completed.');
    }
};