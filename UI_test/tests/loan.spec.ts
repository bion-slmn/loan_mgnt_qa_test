import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('johndoe');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('securepassword');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Loans' }).click();
    await page.getByRole('link', { name: 'Add Loan' }).click();
    await page.getByPlaceholder('Client ID').click();
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Loans' }).click();
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('link', { name: 'Loans' }).click();
    await page.getByRole('button', { name: 'Add Loan' }).click();
    await page.getByPlaceholder('Client ID').click();
    await page.getByPlaceholder('Client ID').fill('8');
    await page.getByLabel('Type of Loan:').selectOption('Salary Loan');
    await page.locator('#webpack-dev-server-client-overlay').contentFrame().getByRole('button', { name: 'Dismiss' }).click();
    await page.locator('#status').selectOption('Pending');
    await page.locator('#webpack-dev-server-client-overlay').contentFrame().getByRole('button', { name: 'Dismiss' }).click();
    await page.getByPlaceholder('Gross Loan').click();
    await page.getByPlaceholder('Gross Loan').fill('20000');
    await page.getByPlaceholder('Balance').click();
    await page.getByPlaceholder('Balance').fill('20000');
    await page.getByPlaceholder('Amortization').click();
    await page.getByPlaceholder('Amortization').fill('23');
    await page.getByPlaceholder('Maturity Date').fill('2025-03-29');
    await page.getByRole('button', { name: 'Add New Loan' }).click();
    await page.getByLabel('Terms:').selectOption('2');
    await page.locator('#webpack-dev-server-client-overlay').contentFrame().getByRole('button', { name: 'Dismiss' }).click();
    await page.getByRole('button', { name: 'Add New Loan' }).click();
    await page.getByRole('link', { name: 'Loans' }).click();
    await page.getByRole('link', { name: 'Loans' }).click();
    await page.getByRole('link', { name: 'Loans' }).click();
    await page.getByRole('link', { name: 'Add Loan' }).click();
    await page.getByRole('link', { name: 'Loans' }).click();
    await page.getByRole('row', { name: '6 Elon Musk Personal Loan ₱' }).getByRole('button').nth(1).click();
    await page.getByLabel('Status:').selectOption('Approved');
    await page.locator('#webpack-dev-server-client-overlay').contentFrame().getByRole('button', { name: 'Dismiss' }).click();
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱' }).getByRole('link').click();
    await page.getByPlaceholder('Balance').click();
    await page.getByPlaceholder('Balance').fill('0');
    await page.getByPlaceholder('Monthly Amortization').click();
    await page.getByPlaceholder('Monthly Amortization').fill('');
    await page.getByPlaceholder('Monthly Amortization').press('ArrowUp');
    await page.getByPlaceholder('Monthly Amortization').press('ControlOrMeta+z');
    await page.getByPlaceholder('Monthly Amortization').press('ControlOrMeta+z');
    await page.getByPlaceholder('Balance').fill('');
    await page.getByPlaceholder('Balance').press('ControlOrMeta+z');
    await page.getByPlaceholder('Monthly Amortization').click();
    await page.getByPlaceholder('Balance').click();
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').press('ArrowLeft');
    await page.getByPlaceholder('Balance').fill('-2500.00');
    await page.getByPlaceholder('Gross Loan').click();
    await page.getByPlaceholder('Gross Loan').press('ArrowLeft');
    await page.getByPlaceholder('Gross Loan').press('ArrowLeft');
    await page.getByPlaceholder('Gross Loan').press('ArrowLeft');
    await page.getByPlaceholder('Gross Loan').press('ArrowLeft');
    await page.getByPlaceholder('Gross Loan').press('ArrowLeft');
    await page.getByPlaceholder('Gross Loan').press('ArrowLeft');
    await page.getByPlaceholder('Gross Loan').press('ArrowLeft');
    await page.getByPlaceholder('Gross Loan').fill('-5500.00');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱ -' }).getByRole('button').first().click();
    await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱ -' }).getByRole('button').first().click();
    await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱ -' }).getByRole('button').first().click();
    await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱ -' }).getByRole('button').first().click();
    await page.getByRole('row', { name: '6 Elon Musk Personal Loan ₱' }).getByRole('button').first().click();
    await page.getByRole('row', { name: '3 Elon Musk Personal Loan ₱' }).getByRole('button').first().click();
    await page.getByRole('row', { name: '2 Elon Musk Salary Loan ₱' }).getByRole('button').first().click();
});