const { expect } = require('@playwright/test');

exports.Modal = class Modal {
  constructor(page) {
    this.page = page;
    this.x_button = page.locator('button.modal__close');
    this.modal_header = page.locator('h3.modal__heading ')
    this.product_title = page.locator('a.cart-product__title')
    this.expect_title = 
      'Apple MagSafe 2 85 Вт для MacBook Pro с 15" дисплеем Retina (MD506Z/A) '
  }

  async close_modal() {
    await this.modal_header.isVisible();
    await expect(this.modal_header).toHaveText('Корзина')
    await expect(this.product_title).toHaveText(this.expect_title)
    await this.page.screenshot({
      path: 'screenshot.png'
    })
    await this.x_button.click();
  }
};
