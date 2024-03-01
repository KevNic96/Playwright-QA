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
    this.errorUserMessage = page.getByLabel('User already exists', {exact: true});
    this.errorPasswordMessage = page.getByLabel('Password must be at least 8 characters and contain at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol', {exact: true});
    this.errorDifferentPasswords = page.getByLabel('Passwords must match', {exact: true});
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

  async registerExistingUser() {
    await this.name.fill(credentials.validRegisterCredentials.name);
    await this.username.fill(credentials.validRegisterCredentials.userName);
    await this.email.fill(credentials.validRegisterCredentials.email);
    await this.password.fill(credentials.validRegisterCredentials.password);
    await this.confirmPassword.fill(credentials.validRegisterCredentials.confirmPassword);
    await this.confirmButton.click();
  }

  async registerWithNotValidPassword() {
    await this.name.fill(credentials.validRegisterCredentials.name);
    await this.username.fill(credentials.validRegisterCredentials.userName);
    await this.email.fill(credentials.validRegisterCredentials.email);
    await this.password.fill('123');
    await this.confirmPassword.fill('123');
    await this.confirmButton.click();
  }

  async registerWithADifferentConfirmPassword() {
    await this.name.fill(credentials.validRegisterCredentials.name);
    await this.username.fill(credentials.validRegisterCredentials.userName);
    await this.email.fill(credentials.validRegisterCredentials.email);
    await this.password.fill(credentials.validRegisterCredentials.password);
    await this.confirmPassword.fill('Aeeeee12$');
    await this.confirmButton.click();
  }

}

module.exports = RegisterPage