const { test, chromium } = require('@playwright/test');
const { PageHeader } = require('../pageobjects/header');
const { ObjectPage } = require('../pageobjects/object');
const { BasePage } = require('../pageobjects/basepage');
const {Modal} = require('../pageobjects/modal_window')
test('Find a MAgSafe', async ({ page }) => {
  const base_page = new BasePage(page);
  const obj = new ObjectPage(page);
  const header = new PageHeader(page);
  const modal = new Modal(page)

  const url = 'https://rozetka.com.ua';
  await base_page.go_to_url(url);
  
  await header.search_field('MD506Z/A');
  await header.title_value();
  await obj.click_buy();
  await header.header_logo();
  await header.header_stash();
  await modal.close_modal();
});



