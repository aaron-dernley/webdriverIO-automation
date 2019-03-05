const desktop = {
  // Common browser capabilities go here
  'acceptSslCerts': true
};

const firefoxHeadless = {
  ...desktop,
  'browserName': 'firefox',
  'moz:firefoxOptions': {
      'args': ['-headless', '--window-size=1920,1080']
  }
};

const firefox = {
  ...desktop,
  'browserName': 'firefox',
  'moz:firefoxOptions': {
      'args': ['--window-size=1920,1080']
  }
};

const chrome = {
  ...desktop,
  'browserName': 'chrome',
  'chromeOptions': {
      args: ['--start-fullscreen']
  }
};

const chromeHeadless = {
  ...desktop,
  'browserName': 'chrome',
  'chromeOptions': {
      args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
  }
};

module.exports = {
  firefoxHeadless,
  firefox,
  chrome,
  chromeHeadless
};