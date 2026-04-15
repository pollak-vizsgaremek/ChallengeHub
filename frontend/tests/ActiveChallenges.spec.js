import { test, expect } from '@playwright/test';

test('active challenges', async ({ page }) => {
  await page.goto('http://localhost:5173/');

    // Click the active challenges link.
    await page.getByRole('link', { name: 'Active Challenges' }).click();
    // Expects page to have a heading with the name of Active Challenges.
    await expect(page.getByRole('heading', { name: 'Active Challenges' })).toBeVisible();
});