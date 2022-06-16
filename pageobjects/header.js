
const { expect } = require('@playwright/test');


exports.PageHeader = class PageHeader{
  constructor(page) {
    this.page = page;
    this.search_bar = page.locator('.search-form__input');
    this.product_page = page.locator('.suggest-goods');
    this.expect_title =
      'Apple MagSafe 2 85 Вт для MacBook Pro с 15" дисплеем Retina (MD506Z/A)   3 666 ₴ ';
    this.headerLogo = page.locator('.header__logo');
    this.stash = page.locator('button.header__button.ng-star-inserted.header__button--active')
  }

  async search_field(value) {
    await this.search_bar.isEnabled();
    await this.search_bar.click()
    await this.search_bar.fill(value);
  }

  async title_value() {
    const title = this.product_page;
    await expect(title).toHaveText(this.expect_title);
    await this.product_page.click();
  }
  async header_logo(){
    await this.headerLogo.isVisible();
    await this.headerLogo.click();

  }
  async header_stash(){
    await this.stash.isVisible();
    await this.stash.click();
  }
}


