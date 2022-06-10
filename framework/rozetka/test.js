const { chromium, expect } = require('@playwright/test');
const { Elements } = require('./elements_for_test')


let elements = new Elements();

class RozetkaTest {

  constructor(page) {
    this.page = page;
  }

  async navigate() {
    const browser = await chromium.launch();
    this.page = await browser.newPage();
    await this.page.goto('https://rozetka.com.ua/');
  }

  async searchBar() {
    await this.page.locator(elements.search_bar).click();
    await this.page.locator(elements.search_bar).fill(elements.search_value);
    const title = await this.page.locator(elements.product_page);
    await expect(title).toHaveText(elements.expect_title);
    await this.page.locator(elements.product_page).click();
  }
  async buyit() {
    const button1 = await this.page
      .locator('role=button')
      .filter({ hasText: 'Купить в кредит' });
    await button1.click();
    await this.page.locator(elements.close_popup).click();
    const button = await this.page
      .locator('role=button')
      .filter({ hasText: 'Купить' });
    await button.first().click();
    await this.page.locator(elements.close_popup).click();
  }
  async checkMyBag() {
    await this.page.locator(elements.logo_button).click();
    await this.page.locator(elements.shoping_bag).click();
    const title1 = await this.page.locator('a.cart-product__title');
    await expect(title1).toHaveText(elements.expect_title1);
  }
  async makeScreen(path) {
    await this.page.screenshot({ path: path });
  }
}
module.exports = {
  RozetkaTest,
};
