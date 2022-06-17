exports.BasePage = class BasePage{
  constructor(page) {
    this.page = page;
  }
  async go_to_url(url) {

    await this.page.goto(url);
  }
}






