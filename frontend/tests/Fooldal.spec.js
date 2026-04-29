import { test, expect } from '@playwright/test';
import { setGuestSession } from './helpers/auth';

test('Fooldal oldal betoltodik', async ({ page }) => {
  await setGuestSession(page);
  await page.goto('/');

  await expect(page.locator('.main-title')).toBeVisible();
  await expect(page.locator('.how-to-title')).toBeVisible();
});
