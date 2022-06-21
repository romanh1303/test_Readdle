
const { expect } = require('@playwright/test');


exports.PageHeader = class PageHeader{
  constructor(page) {
    this.page = page; //not used
    this.search_bar = page.locator('.search-form__input'); //this.page maybe ?
    this.product_page = page.locator('.suggest-goods'); //naming issue
    this.expect_title =  //should be moved to separate file
      'Apple MagSafe 2 85 Вт для MacBook Pro с 15" дисплеем Retina (MD506Z/A)   3 799 ₴ ';
    this.headerLogo = page.locator('.header__logo'); //shoul dbe in some data file
    this.stash = page.locator('button.header__button.ng-star-inserted.header__button--active') //use better locators this looks ugly
  }

  async search_field(value) { //rename to searchFor() would be better
    await this.search_bar.isEnabled(); //this is probably done implicitly anyway on click()
    await this.search_bar.click()
    await this.search_bar.fill(value);
  }

  async title_value() {   //naming... it's not clear what should function do
    const title = this.product_page; //why do we even need this variable? .toHaveText(this.product_page);
    await expect(title).toHaveText(this.expect_title); //no expects in pageObject functions please
    await this.product_page.click();
    // locator was .suggest-goods =rename> product_page =rename> title  why do we need all this renaming for?
  }
  async header_logo(){ //clickHeaderLogo() ?
    await this.headerLogo.isVisible(); //probably not needed
    await this.headerLogo.click();

  }
  async header_stash(){ //clickHeaderStash() ?
    await this.stash.isVisible(); //probably not needed
    await this.stash.click();
  }
}


