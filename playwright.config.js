

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 30000,
  use:{
    headless: false,
  }
};

module.exports = config;
