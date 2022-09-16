class SignUpPage {
  constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.passwordConfirmationInput = page.locator('#user_password_confirmation');
        this.userFirstnameInput = page.locator('#user_firstname');
        this.userLastnameInput = page.locator('#user_lastname');
        this.userEmailInput = page.locator('#user_mail');
        this.submitButton = page.locator('[name="commit"]');    
  }
  async usernameInputFill(value) {
    await this.usernameInput.fill(value);
  }
  async passwordInputFill(value) {
    await this.passwordInput.fill(value);
  }
  async passwordConfirmationInputFill(value) {
    await this.passwordConfirmationInput.fill(value);
  }
  async userFirstnameInputFill(value) {
    await this.userFirstnameInput.fill(value);
  }
  async userLastnameInputFill(value) {
    await this.userLastnameInput.fill(value);
  }
  async userEmailInputFill(value) {
    await this.userEmailInput.fill(value);
  }
  async submitButtonClick() {
    await this.submitButton.click();
  }
}
module.exports = { SignUpPage  };