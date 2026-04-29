import { test, expect } from '@playwright/test';
import { setGuestSession } from './helpers/auth';

test('Kapcsolat oldal betoltodik', async ({ page }) => {
  await setGuestSession(page);
  await page.goto('/kapcsolat');

  await expect(page).toHaveURL(/\/kapcsolat/);
  await expect(page.locator('.contact-card')).toBeVisible();
});
