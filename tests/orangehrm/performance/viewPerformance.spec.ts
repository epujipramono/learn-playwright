import { test, expect } from '@playwright/test';

test('orangehrm view performance', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview');
});