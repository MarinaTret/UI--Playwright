const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");
const { email, password } = require("../user.js");

test("Successfull authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.locator("h2")).toHaveText("Моё обучение");
});

test("Unsuccessfull authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.getByPlaceholder("Email").fill(unknownEmail);
  await page.getByPlaceholder("Пароль").fill(unknownPassword);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.locator("text=Вы ввели неправильно логин или пароль")).toBeVisible();
});
