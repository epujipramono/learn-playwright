import { test, expect } from '@playwright/test';
import path from 'path';
import { AdminPage } from '../../../pages/orangehrm/AdminPage.ts';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('search admin', async ({ page }) => {
  const username = 'josephevans2623'
  const adminPage = new AdminPage(page);
  await adminPage.goto();
  await adminPage.searchAdmin(username);

  //validasi
  await this.page.waitForSelector('[class="oxd-table-card"]');
  await expect(this.page.locator('[class="oxd-table-card"] [role="cell"]').nth(1)).toHaveText(username);
  //await page.waitForTimeout(5000);

});