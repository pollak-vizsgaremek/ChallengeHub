import { test, expect } from '@playwright/test';
import { setAuthenticatedSession } from './helpers/auth';

test('Onboarding oldal betoltodik', async ({ page }) => {
  await setAuthenticatedSession(page);
  await page.goto('/kezdeti-lepesek');

  await expect(page).toHaveURL(/\/kezdeti-lepesek/);
  await expect(page.locator('.onboarding-card')).toBeVisible();
});
