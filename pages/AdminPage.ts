import { expect, Page } from '@playwright/test';

export class AdminPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    }

    async addAdmin(name: string, username: string, password: string) {
        const addButton = this.page.getByRole('button', { name: ' Add' });
        await expect(addButton).toBeVisible();
        await addButton.click();
        
        // user role
        await this.page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
        await this.page.getByRole('option', { name: 'Admin' }).click();

        // status
        await this.page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').last().click();
        await this.page.getByRole('option', { name: 'Enabled' }).click();
        
        // password
        await this.page.locator('[type="password"]').nth(0).fill(password);
        
        // employee name
        await this.page.getByRole('textbox', { name: 'Type for hints...' }).fill(name);
        await this.page.getByRole('option', { name: name }).nth(0).click();
        
        // username
        await this.page.getByRole('textbox').nth(2).fill(username);

        // confirm password
        await this.page.locator('[type="password"]').nth(1).fill(password);

        // click save
        await this.page.getByRole('button', { name: 'Save' }).click();

    }

    async searchAdmin(username: string) {
        await this.page.locator('[class="oxd-input oxd-input--active"]').last().fill(username);
        await this.page.getByRole('button', { name: 'Search' }).click();

    }

    async updateAdmin() {
        await this.page.locator('[class="oxd-icon bi-pencil-fill"]').click();

        // status
        await this.page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').last().click();
        await this.page.getByRole('option', { name: 'Disabled' }).click();
        
        // click save
        await this.page.getByRole('button', { name: 'Save' }).click();

    }

    async deleteAdmin() {
        await this.page.locator('[class="oxd-icon bi-trash"]').click();
        await this.page.getByRole('button', { name: ' Yes, Delete' }).click();

    }
}