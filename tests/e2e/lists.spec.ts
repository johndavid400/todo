import { test, expect, type Page } from '@playwright/test';
import { ListsDevPage } from './lists_dev_page';

test.beforeEach(async ({ page }) => {
  const playwrightDev = new ListsDevPage(page);
  await playwrightDev.login();
});

test.describe('Logged in user can create a todo List', () => {
  test('should allow me to create a new list', async ({ page }) => {
    await page.getByTestId('list-name-input').fill('Sample List');
    await page.getByTestId('list-submit').click();
    await expect(page.locator('h3')).toContainText(['Sample List']);
  });

  test('should allow me to create a new list item', async ({ page }) => {
    const playwrightDev = new ListsDevPage(page);
    await playwrightDev.lastList.click();
    await page.getByTestId('list-item-input').fill('Apples');
    await page.getByTestId('list-item-submit').click();
    await expect(page.locator('.items-center')).toContainText(['Apples']);
    await page.getByTestId('remove-list').click();
  });
});

