const { test, expect } = require('@playwright/test');
const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage.js");
const { nonValidLoginPassCredentials, validCredentials, nonValidLoginUserCredentials } = require('../data/testdata.js');

test.beforeEach(async({page})=>{
  await page.goto("https://frontend-training-taupe.vercel.app/login")
})

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.loginSuccess();

  await expect(homePage.homeText).toBeVisible();
});

test('Must not show the username error', async ({page})=> {
  const loginPage = new LoginPage(page);
  await loginPage.loginUserNonValid();

  await expect(loginPage.notValidUser).not().toBeVisible()
})

test('Username ok, Passrword wrong', async ({page})=> {
  const loginPage = new LoginPage(page);
  await loginPage.loginPassNonValid();

  await expect(loginPage.notValidPass).toBeVisible()
})



