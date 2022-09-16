//const { expect } = require('@playwright/test');
class HomePage {
  constructor(page) {
        this.page = page;
        this.signIn = page.locator('[class="login"]');
        this.accountName = page.locator('[class="user active"]');
        this.signUp = page.locator('[class="register"]');
        this.searchInput = page.locator('[class="small"]');
        this.downloadButton = page.locator('[class="download"]');
        this.issuesLink = page.locator('[class="issues"]');
       
     
  }
  async goto(path) {
        await this.page.goto(path);
  }
  async signInClick() {
    await this.signIn.click();
  }
  async accountNameEnabled() {
    await this.accountName.isEnabled();
  }
  async signUpClick() {
    await this.signUp.click();
  }
  async searchInputFill(value) {
    await this.searchInput.fill(value);
  }
  async downloadButtonClick() {
    await this.downloadButton.click();
  }
  async issuesLinkClick() {
    await this.issuesLink.click();
  }
}
module.exports = { HomePage };
