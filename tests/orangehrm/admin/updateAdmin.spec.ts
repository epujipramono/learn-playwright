import { test, expect } from '@playwright/test';
import path from 'path';
import { AdminPage } from '../../../pages/AdminPage.ts';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('update admin', async ({ page }) => {
  const username = 'NoorRafi2216';
  const adminPage = new AdminPage(page);
  await adminPage.goto();
  await adminPage.searchAdmin(username);
  await adminPage.updateAdmin();

  //validasi berhasil create user
  await expect(page.getByText('Successfully Updated')).toBeVisible({timeout: 10000});

});