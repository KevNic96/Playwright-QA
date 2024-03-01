const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');
const { test, expect } = require('@playwright/test');

test.describe('Login tests', () => {
  let browser, page, loginPage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
  });

  test.afterAll(async () => {
    await browser.close();
  });

});
