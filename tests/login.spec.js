const { test, expect } = require('@playwright/test');
const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage.js")

test.beforeEach(async({page})=>{
  await page.goto("https://frontend-training-taupe.vercel.app/login")
})

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.login();

  await expect(homePage.homeText).toBeVisible();
});

