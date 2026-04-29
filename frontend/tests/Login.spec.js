import { test, expect } from '@playwright/test';
import { setGuestSession } from './helpers/auth';

test('Bejelentkezes oldal betoltodik', async ({ page }) => {
  await setGuestSession(page);
  await page.goto('/bejelentkezes');

  await expect(page).toHaveURL(/\/bejelentkezes/);
  await expect(page.locator('.login-title')).toBeVisible();
  await expect(page.locator('.login-form')).toBeVisible();
});
