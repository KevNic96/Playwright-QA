const credentials = require('../data/testdata');
class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = page.getByLabel('Username', {exact: true});
    this.password = page.getByLabel('Password', {exact: true});
    this.loginButton = page.getByRole('button', { name: 'Login'});
  }

  async loginSuccess(){
    await this.username.fill(credentials.validCredentials.username)
    await this.password.fill(credentials.validCredentials.password)
    await this.loginButton.click()
  }

  async loginNonValid(){
    await this.username.fill(credentials.nonValidLoginCredentials.username)
    await this.password.fill(credentials.nonValidLoginCredentials.password)
    await this.loginButton.click()
  }

}


module.exports = LoginPage;



