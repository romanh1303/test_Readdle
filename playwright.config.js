

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 20000,
  use:{
    headless: true,
  }
};

module.exports = config;
