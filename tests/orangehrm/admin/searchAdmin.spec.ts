import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
});

test.describe('search admin by username', () => {
    test('search admin if already exists', async ({ page }) => {
        const username = 'Admin'
        const usernameInput = page.locator('[class="oxd-input oxd-input--active"]').last();
        const btnSearch = page.getByRole('button', { name: 'Search' });
        const tableRow = page.locator('[class="oxd-table-card"] [role="cell"]').nth(1);

        await usernameInput.fill(username);
        await btnSearch.click();

        //validasi
        await page.waitForSelector('[class="oxd-table-card"]');
        await expect(tableRow).toHaveText(username);
        
        //await page.waitForTimeout(5000);
    });
});