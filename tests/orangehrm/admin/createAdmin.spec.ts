import { test, expect } from '@playwright/test';
import path from 'path';
import { AdminPage } from '../../../pages/AdminPage.ts';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test('create admin if already exists', async ({ page }) => {
  const adminPage = new AdminPage(page);
  await adminPage.goto();
  await adminPage.addAdmin('Joseph Evans', `josephevans${Math.floor(Math.random() * 10000)}`,'admin123');

  //validasi berhasil create user
  await expect(page.getByText('Successfully Saved')).toBeVisible({timeout: 10000});

});