

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 10000,
  use:{
    headless: false,
  }
};

module.exports = config;