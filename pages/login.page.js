class LoginPage {
  constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.submitButton = page.locator('[type="submit"]');
        this.flashNotice = page.locator('[class="flash notice"]');
        
  }
  async goto() {
        await this.page.goto('https://www.redmine.org/');
  }
  async usernameInputFill(value) {
    await this.usernameInput.fill(value);
  }
  async passwordInputFill(value) {
    await this.passwordInput.fill(value);
  }
  async submitButtonClick() {
    await this.submitButton.click();
  }
  async flashNoticeIsVisible() {
    await this.flashNotice.isVisible();
  }
}
module.exports = { LoginPage };
