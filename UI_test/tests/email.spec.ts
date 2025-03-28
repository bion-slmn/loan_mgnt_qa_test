import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('johndoe');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('securepassword');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Email' }).click();
    await page.getByRole('button', { name: 'Send message' }).click();
    await page.getByRole('textbox', { name: 'Your message' }).click();
    await page.getByRole('textbox', { name: 'Your message' }).fill('loan not yet');
    await page.getByRole('button', { name: 'Send message' }).click();
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('invalid@gmai.com');
    await page.getByRole('button', { name: 'Send message' }).click();
    await page.getByRole('cell', { name: 'John Doe' }).nth(1).click();
    await page.locator('tr:nth-child(5) > td:nth-child(5)').click();
    await page.getByRole('cell', { name: 'stephen@gmail.com' }).dblclick();
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').press('ArrowLeft');
    await page.locator('input[name="email"]').press('ArrowLeft');
    await page.locator('input[name="email"]').press('ArrowLeft');
    await page.locator('input[name="email"]').press('ArrowLeft');
    await page.locator('input[name="email"]').press('ArrowLeft');
    await page.locator('input[name="email"]').press('ArrowLeft');
    await page.locator('input[name="email"]').press('ArrowRight');
    await page.locator('input[name="email"]').press('ArrowRight');
    await page.locator('input[name="email"]').fill('johndoe@gmai.com');
    await page.getByRole('button', { name: 'Send message' }).click();
});