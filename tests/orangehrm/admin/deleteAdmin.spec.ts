import { test, expect } from '@playwright/test';
import path from 'path';
import { AdminPage } from '../../../pages/AdminPage.ts';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('delete admin', async ({ page }) => {
  const username = 'garciapaul'
  const adminPage = new AdminPage(page);
  await adminPage.goto();
  await adminPage.searchAdmin(username);
  await adminPage.deleteAdmin();

  //validasi berhasil create user
  await expect(page.getByText('Successfully Deleted')).toBeVisible({timeout: 10000});

});