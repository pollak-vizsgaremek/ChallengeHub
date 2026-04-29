import { test, expect } from '@playwright/test';
import { setAuthenticatedSession } from './helpers/auth';

test('Aktiv kihivasok oldal betoltodik', async ({ page }) => {
  await setAuthenticatedSession(page);
  await page.goto('/aktiv-kihivasok');

  await expect(page).toHaveURL(/\/aktiv-kihivasok/);
  await expect(page.locator('.active-hero-title')).toBeVisible();
});
