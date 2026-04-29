import { test, expect } from '@playwright/test';
import { setAuthenticatedSession } from './helpers/auth';

test('Ranglista oldal betoltodik', async ({ page }) => {
  await setAuthenticatedSession(page);
  await page.goto('/ranglista');

  await expect(page).toHaveURL(/\/ranglista/);
  await expect(page.locator('.leaderboard-page')).toBeVisible();
});
