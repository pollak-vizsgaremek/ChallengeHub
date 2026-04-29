import { test, expect } from '@playwright/test';
import { setAuthenticatedSession } from './helpers/auth';

test('Shop oldal betoltodik', async ({ page }) => {
  await setAuthenticatedSession(page);
  await page.goto('/bolt');

  await expect(page).toHaveURL(/\/bolt/);
  await expect(page.getByRole('heading', { name: /ITEM SHOP/i })).toBeVisible();
});
