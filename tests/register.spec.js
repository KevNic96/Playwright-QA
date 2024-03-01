const { chromium } = require('playwright');
const RegisterPage = require('../pages/RegisterPage');
const HomePage = require("../pages/HomePage.js");
const { test, expect } = require('@playwright/test');
const { beforeEach } = require('node:test');


test.describe('Register tests', () => {
  let browser, registerPage, homePage;

  test.beforeAll(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    registerPage = new RegisterPage(page);
  });

  test.beforeEach(async ({page}) => {
    await page.goto('/register')
  })

  test.afterAll(async () => {
    await browser.close();
  });

  test('register with valid credentials', async ({ page }) => {  
    await registerPage.registerSuccessfully()
    await expect(homePage.homeText).toBeVisible();
  });

  test('register with a already used email', async ({ page }) => {  
    await registerPage.registerExistingUser()
    await expect(registerPage.errorUserMessage).toBeVisible();
  });

  test('register with not valid password', async ({ page }) => {  
    await registerPage.registerWithNotValidPassword()
    await expect(registerPage.errorPasswordMessage).toBeVisible();
  });

  test('register with different password and confirmPassword', async ({ page }) => {  
    await registerPage.registerWithADifferentConfirmPassword()
    await expect(homePage.homeText).toBeVisible();
  });

  
});
