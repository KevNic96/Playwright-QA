const { chromium } = require('playwright');
const RegisterPage = require('../pages/RegisterPage');
const { test, expect } = require('@playwright/test')


test.describe('Register tests', () => {
  let browser, page, registerPage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    registerPage = new RegisterPage(page);
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('register with valid credentials', async ({ page }) => {
    await page.goto(`/register`);
  
    // Fill all inputs with correct information
    expect(page.registerSuccesfully().to)

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  expect('should login successfully with valid credentials', async () => {
    await loginPage.login('usuario', 'contraseña');
    // Asegurar que el inicio de sesión fue exitoso
  });

});
