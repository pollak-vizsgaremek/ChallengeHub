import { test, expect } from '@playwright/test';
import { setAuthenticatedSession } from './helpers/auth';

test('Profil oldal betoltodik', async ({ page }) => {
  await setAuthenticatedSession(page);
  await page.goto('/profil');

  await expect(page).toHaveURL(/\/profil/);
  await expect(page.locator('.profile-container')).toBeVisible();
});
