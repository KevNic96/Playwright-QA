const credentials = require('../data/testdata');
class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = page.getByLabel('Username', {exact: true});
    this.password = page.getByLabel('Password', {exact: true});
    this.loginButton = page.getByRole('button', { name: 'Login'});
    this.notValidUser = page.getByLabel('Not found. Couldnt find any user');
    this.notValidPass = page.getByLabel('Validation Error', {exact: true});
  }

  async loginSuccess(){
    await this.username.fill(credentials.validCredentials.username)
    await this.password.fill(credentials.validCredentials.password)
    await this.loginButton.click()
  }

  async loginUserNonValid(){
    await this.username.fill(credentials.nonValidLoginUserCredentials.username)
    await this.password.fill(credentials.nonValidLoginUserCredentials.password)
    await this.loginButton.click()
  }

  async loginPassNonValid() {
    await this.username.fill(credentials.nonValidLoginPassCredentials.username)
    await this.password.fill(credentials.nonValidLoginPassCredentials.password)
    await this.loginButton.click()
  }

}


module.exports = LoginPage;



