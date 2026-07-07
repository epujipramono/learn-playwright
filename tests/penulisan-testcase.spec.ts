import { test, expect } from '@playwright/test';

// hooks beforeEach
test.beforeEach(async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/');
});

// hooks afterEach
test.afterEach(async ({ page }) => {
  await page.waitForTimeout(2000);
});

// grouping and tagging test cases
test.describe('all links',{tag: '@allLinks'}, () => {
  test.describe('valid links on the homepage',{tag: '@validLinks'}, () => {
    test('test step 1', async ({ page }) => {
      await page.getByRole('link', { name: 'Autocomplete' }).click();
      
    });

    test('test step 2', async ({ page }) => {
      await page.getByRole('link', { name: 'Buttons' }).click();
    });

    test('test step 3', async ({ page }) => {
      await page.getByRole('link', { name: 'Checkbox' }).click();
    });

    test('test step 4', async ({ page }) => {
      await page.getByRole('link', { name: 'Datepicker' }).click();
    });

    test('test step 5', async ({ page }) => {
      await page.getByRole('link', { name: 'Drag and Drop' }).click();``
    })
  });

// test.describe('invalid links on the homepage',{tag: '@invalidLinks'}, () => {
//   })
});


