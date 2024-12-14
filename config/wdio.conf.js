const moment = require('moment');

exports.config = {

    runner: 'local',
    specs:  ['./tests/**/*.js'],
    exclude: [],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 1,
        browserName: process.env.BROWSER || 'chrome',
        acceptInsecureCerts: true,
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://cloud.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onComplete: function () {
        console.log('Test execution completed.');
    }
};