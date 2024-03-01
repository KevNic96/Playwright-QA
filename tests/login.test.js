const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');

describe('Login tests', () => {
  let browser, page, loginPage;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should login successfully with valid credentials', async () => {
    await loginPage.login('usuario', 'contraseña');
    // Asegurar que el inicio de sesión fue exitoso
  });

});
