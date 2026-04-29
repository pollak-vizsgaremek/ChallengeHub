import { test, expect } from '@playwright/test';
import { setAuthenticatedSession } from './helpers/auth';

test('Admin oldal betoltodik admin sessionnel', async ({ page }) => {
  await setAuthenticatedSession(page, { isAdmin: true });
  await page.goto('/admin');

  await expect(page).toHaveURL(/\/admin/);
  await expect(page.locator('.admin-layout')).toBeVisible();
  await expect(page.locator('.admin-logo')).toHaveText(/ChallengeHub/i);
});
