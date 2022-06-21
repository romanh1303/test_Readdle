const { test } = require('@playwright/test');
const { PageHeader } = require('../pageobjects/header');
const { ObjectPage } = require('../pageobjects/object');
const { BasePage } = require('../pageobjects/basepage');
const { Modal } = require('../pageobjects/modal_window');
//todo Add few more tests and use hooks https://playwright.dev/docs/intro#using-test-hooks
//also wrap it in test.describe

test('Find a MAgSafe', async ({ page }) => {  //not clear what is being tested
  const base_page = new BasePage(page); // the whole purpose of BasePage is to be extended by other Pages and hold common functions
  const obj = new ObjectPage(page); //naming something Object is bad practice since everything is an Object
  const header = new PageHeader(page); //This should probably be a PageElement and be a member of other PageObjects (as variable)
  const modal = new Modal(page);
  const url = 'https://rozetka.com.ua'; //this is base URL and should be placed in playwright.config.js

  await base_page.go_to_url(url);
  //todo There are a lot of Naming issues..
  // Rename the functions so it would be understandable for nonProgrammers what is going on.
  await header.search_field('MD506Z/A');
  await header.title_value(); //no idea what happens here just by reading name
  await obj.click_buy();
  await header.header_logo();//also not clear
  await header.header_stash(); //also not clear
  await modal.close_modal(); //this is okay =)

  //todo mode verifications into tests
  // the logical ending of every test should be an "expect"
  // for some reason  verifications are made inside pageObject functions()
});