import { test, expect } from '@playwright/test';
import { setGuestSession } from './helpers/auth';

test('Regisztracio oldal betoltodik', async ({ page }) => {
  await setGuestSession(page);
  await page.goto('/regisztracio');

  await expect(page).toHaveURL(/\/regisztracio/);
  await expect(page.locator('.register-title')).toBeVisible();
  await expect(page.locator('.register-form')).toBeVisible();
});
