import { test, expect } from '@playwright/test';
import { setAuthenticatedSession } from './helpers/auth';

test('Egyeni kihivasok oldal betoltodik', async ({ page }) => {
  await setAuthenticatedSession(page);
  await page.goto('/egyeni-kihivasok');

  await expect(page).toHaveURL(/\/egyeni-kihivasok/);
  await expect(page.locator('.custom-hero-title')).toBeVisible();
});
