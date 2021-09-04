

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
  },
  directConnect: true,
  baseUrl: 'http://localhost:63753/',
  framework: 'jasmine',
};