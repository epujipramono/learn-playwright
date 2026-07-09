import { test, expect } from '@playwright/test';

test.use({
  storageState: 'playwright/.auth/user.json'
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
});

test('create admin if already exists', async ({ page }) => {
  await page.getByRole('button', { name: ' Add' }).click();
  
  // user role
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();

  // status
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').last().click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  
  // password
  await page.locator('[type="password"]').nth(0).fill('admin12345');
  
  // employee name
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Joseph');
  await page.getByRole('option', { name: 'Joseph Evans' }).click();
  
  // username
  const username = `johndoe${Math.floor(Math.random() * 10000)}`;
  await page.getByRole('textbox').nth(2).fill(username);

  // confirm password
  await page.locator('[type="password"]').nth(1).fill('admin12345');
  await page.waitForTimeout(5000);
  
  // click save
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000);

});