import { test, expect } from '@playwright/test';

test('learn pw on website formy project - autocomplete page', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/');

  //await page.locator('[href="/autocomplete"]').nth(1).click();
  await page.getByRole('link', { name: 'Autocomplete' }).click();

  await page.waitForTimeout(2000);

  // validasi
  await expect(page).toHaveURL('https://formy-project.herokuapp.com/autocomplete');

  // menggunakan locator dari playwright UI
  await page.getByRole('textbox', { name: 'Address', exact: true }).fill('Kavling 234');
  await page.getByRole('textbox', { name: 'Street address', exact: true }).fill('Jalan Raya Bogor');
  await page.getByRole('textbox', { name: 'City' }).fill('Bogor');
  await page.getByRole('textbox', { name: 'State' }).fill('Jawa Barat');
  await page.getByRole('textbox', { name: 'Zip code' }).fill('16111');
  await page.getByRole('textbox', { name: 'Country' }).fill('Indonesia');

/* 
  // menggunakan id attribute
  await page.locator('[id="autocomplete"]').fill('Kavling 234');
  await page.locator('[id="street_number"]').fill('Jalan Raya Bogor');
  await page.locator('[id="locality"]').fill('Bogor');
  await page.locator('[id="administrative_area_level_1"]').fill('Jawa Barat');
  await page.locator('[id="postal_code"]').fill('16111');
  await page.locator('[id="country"]').fill('Indonesia');
 */
}); 