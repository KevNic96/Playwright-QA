// @ts-check
const { expect } = require('@playwright/test');

module.exports = class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = page.getByLabel('Username', {exact: true});
    this.password = page.getByLabel('Password', {exact: true});
    this.loginButton = page.getByText('Login', { exact: true });
  }

  async goto() {
    await this.page.goto('https://frontend-training-taupe.vercel.app/login');
  }

  async login({ username, password }){
    await this.username.fill(username)
    await this.password.fill(password)
    expect(username, await this.username.inputValue())
    expect(password, await this.password.inputValue())
    await this.loginButton.click()
    await this.page.waitForURL('**/');
  }

}



