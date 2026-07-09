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
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  
  // password
  await page.getByRole('textbox').nth(3).fill('admin12345');
  
  // employee name
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Joseph');
  await page.getByRole('option', { name: 'Joseph Evans' }).click();
  
  // username
  await page.getByRole('textbox').nth(2).fill('johndoee2');

  // confirm password
  await page.getByRole('textbox').nth(4).fill('admin12345');
  await page.waitForTimeout(5000);
  
  // click save
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(5000);

});