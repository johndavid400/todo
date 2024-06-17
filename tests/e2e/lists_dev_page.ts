import { expect, type Locator, type Page } from '@playwright/test';

export class ListsDevPage {
  readonly page: Page;
  readonly lastList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastList = page.locator('.list-title').last()
  }

  async goHome() {
    await this.page.goto('http://localhost:5173');
  }

  async goToLogin() {
    await this.page.goto('http://localhost:5173/login');
  }

  async login() {
    this.goToLogin();
    await this.page.getByTestId('login-email').fill('test@example.com');
    await this.page.getByTestId('login-password').fill('password');
    await this.page.getByTestId('login-submit').click();
    await expect(this.page.locator('h1')).toContainText(['Lists']);
  }
}
