const { expect } = require('@playwright/test');

exports.ObjectPage = class ObjectPage {
  constructor(page) {
    this.page = page;
//TODO rewrite Locators they look bad
    this.credit = page.locator('button.button.button--medium.button--navy.ng-star-inserted'); // should be this.page ?
    this.buy = page.locator(
      'button.buy-button.button.button--with-icon.button--green.button--medium.ng-star-inserted'
    ); // should be this.page ?
    this.close_modal = page.locator('button.modal__close');
  }

  async click_buy() {
    await expect(this.credit).toHaveText('Купить в кредит', {timeout: 40000});
    //expects should not be in PageObjects
    //test data(купить в кредит) should be moved to separate place
    //timeouts should probably be in playwright.config.js ?
    await this.buy.click();
    //so the name of the function is click_buy as a developer i would expect it to do just the click action.
    //it's better to rename the function to click_buy_and_close_modal OR move closing actions to another function close_modal()
    await this.close_modal.isVisible();
    await this.close_modal.click();
  }
};
