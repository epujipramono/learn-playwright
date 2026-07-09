import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../../../pages/LoginPage.ts';

const authFile = path.join(__dirname, '../../../playwright/.auth/user.json');

setup('authenticate token', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin','admin123');

    // validasi
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    const dashboardTitle = await page.getByRole('heading', { name: 'Dashboard' });
    await expect(dashboardTitle).toBeVisible();
    
    await page.context().storageState({ path: authFile });
});