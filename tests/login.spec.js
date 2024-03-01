const { test, expect } = require('@playwright/test');
const LoginPage = require("../pages/LoginPage");

test('User can register successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto()
  await loginPage.login({
    username: 'Nico96',
    password: 'Password123!',
  })
});