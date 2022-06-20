
const { devices } = require('@playwright/test');
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  use:{
    headless: false,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
};

module.exports = config;
