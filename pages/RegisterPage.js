const credentials = require('../data/testdata');

class RegisterPage {

  constructor(page) {
    this.page = page;
    this.name = page.getByLabel('Name', {exact: true});
    this.username = page.getByLabel('Username', {exact: true});
    this.email = page.getByLabel('Email', {exact: true});
    this.password = page.getByLabel('Password', {exact: true});
    this.confirmPassword = page.getByLabel('Confirm Password', {exact: true});
    this.confirmButton = page.getByRole('button', {name: 'Register'});
    this.loginButton = page.getByText('button', {name: 'Login'});
  }

  async goToLoginPage() {
    await this.loginButton.first().click();
  }

  async registerSuccessfully() {
    await this.name.fill(credentials.validRegisterCredentials.name);
    await this.username.fill(credentials.validRegisterCredentials.userName);
    await this.email.fill(credentials.validRegisterCredentials.email);
    await this.password.fill(credentials.validRegisterCredentials.password);
    await this.confirmPassword.fill(credentials.validRegisterCredentials.confirmPassword);
    await this.confirmButton.click();

  }
}

module.exports = RegisterPage