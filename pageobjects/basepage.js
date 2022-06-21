exports.BasePage = class BasePage{ //what is the purpose of this page?
  constructor(page) {
    this.page = page;
  }
  async go_to_url(url) {
    await this.page.goto(url);
  }
}






