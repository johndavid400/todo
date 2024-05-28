import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.getByTestId('login-email').fill('test@example.com');
  await page.getByTestId('login-password').fill('password');
  await page.getByTestId('login-submit').click();
  await expect(page.locator('h1')).toContainText(['Lists']);
});

test.describe('Logged in user can create a todo List', () => {
  test('should allow me to create a new list', async ({ page }) => {
    await page.getByTestId('list-name-input').fill('Sample List');
    await page.getByTestId('list-submit').click();
    await expect(page.locator('h3')).toContainText(['Sample List']);
  });

  test('should allow me to create a new list item', async ({ page }) => {
    await page.locator('.list-title').last().click()
    await page.getByTestId('list-item-input').fill('Apples');
    await page.getByTestId('list-item-submit').click();
    await expect(page.locator('.items-center')).toContainText(['Apples']);
  });
});

