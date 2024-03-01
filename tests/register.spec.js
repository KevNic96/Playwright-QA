const { chromium } = require('playwright');
const RegisterPage = require('../pages/RegisterPage');
const HomePage = require("../pages/HomePage.js");
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');


test.describe('Register tests', () => {
  let browser, page, registerPage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    registerPage = new RegisterPage(page);
  });

  test.beforeEach(async ({page}) => {
    await page.goto('/register')
  })

  test.afterAll(async () => {
    await browser.close();
  });

  test('register with valid credentials', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const homePage = new HomePage(page);
  
    await registerPage.registerSuccessfully()
    await expect(homePage.homeText).toBeVisible();
  });

});
