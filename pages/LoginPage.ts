import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username: string, password: string) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
        
        // using locator
        // await this.page.locator('[name="username"]').fill(username);
        // await this.page.locator('[name="password"]').fill(password);
        // await this.page.locator('[type="submit"]').click();
    }
}