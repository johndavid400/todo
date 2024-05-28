import { test, expect, type Page } from '@playwright/test';

test.describe('User login', () => {
  test('should allow me to login', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.getByTestId('login-email').fill('test@example.com');
    await page.getByTestId('login-password').fill('password');
    await page.getByTestId('login-submit').click();
    await expect(page.locator('h1')).toContainText(['Click some buttons']);
  });
});

