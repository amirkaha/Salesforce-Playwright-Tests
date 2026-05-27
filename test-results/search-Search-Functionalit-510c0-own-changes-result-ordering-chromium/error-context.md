# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Functionality - Non-Functional Tests >> Search Filters - House Search >> @regression @filters TC-24: Sort dropdown changes result ordering
- Location: src\tests\search.spec.ts:339:11

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: getByLabel('Sort order')
Expected pattern: /Sort: Latest listings/i
Received string:  "7: ExpiryDesc"
Timeout: 5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for getByLabel('Sort order')
    12 × locator resolved to <select tgselect="" id="tg-1007" name="sortOrder" _ngcontent-frend-c1304518118="" class="ng-untouched ng-valid ng-dirty">…</select>
       - unexpected value "7: ExpiryDesc"

```

```yaml
- combobox "Sort order":
  - option "Best match"
  - option "Featured first"
  - option "Lowest price"
  - option "Highest price"
  - option "Lowest Buy Now"
  - option "Highest Buy Now"
  - option "Most bids"
  - 'option "Sort: Latest listings" [selected]'
  - option "Closing soon"
  - option "Title"
  - option "Largest discount"
```

# Test source

```ts
  255 |       label: 'North Shore'
  256 |     });
  257 | 
  258 |    await page.getByRole('button', {
  259 |     name: /View .* results?/i
  260 |   }).click();
  261 | 
  262 |     // Assert the button with both classes contains "North Shore"
  263 |     await expect(page.locator('button:has-text("North Shore")')).toBeVisible({ timeout: 3000 });
  264 |       });
  265 | 
  266 |       test('@regression @search TC-30: Clicking X clears the search bar', async ({ page }) => {
  267 | 
  268 |       // Navigate to homepage
  269 |       await homePage.goto();
  270 | 
  271 |       // Enter search text
  272 |       await homePage.searchInput.fill('house');
  273 | 
  274 |       // Verify text entered
  275 |       await expect(homePage.searchInput).toHaveValue('house');
  276 | 
  277 |       // Click clear/X button
  278 |       await page.locator('[aria-label="Clear input"]').click();
  279 | 
  280 |       // Assert search input is now empty
  281 |       await expect(homePage.searchInput).toHaveValue('');
  282 |     });
  283 | 
  284 |   test('@regression @filters TC-22: Condition dropdown filters results', async ({ page }) => {
  285 |     await homePage.search('house');
  286 | 
  287 |     await expect(
  288 |       searchResultsPage.listingCards.first()
  289 |     ).toBeVisible({ timeout: 10000 });
  290 | 
  291 |     // Open New & Used dropdown
  292 |     await page.locator('text=New & Used').click();
  293 | 
  294 |     // Select Used
  295 |     await page.locator('tg-radio-item').filter({
  296 |       hasText: 'Used only'
  297 |     }).click();
  298 | 
  299 |     await page.getByRole('button', {
  300 |       name: /View .* results?/i
  301 |     }).click();
  302 | 
  303 | 
  304 |     // Verify results displayed
  305 |     await expect(
  306 |       searchResultsPage.listingCards.first()
  307 |     ).toBeVisible({ timeout: 10000 });
  308 |   });
  309 | 
  310 |   test('@smoke @filters TC-23: Shipping dropdown displays results correctly', async ({ page }) => {
  311 |     await homePage.search('suzuki');
  312 | 
  313 |     // Open shipping dropdown
  314 |     await page.locator('text=Shipping: All').click();
  315 | 
  316 |     // Select Pickup
  317 |     await page.locator('tg-radio-item').filter({
  318 |       hasText: 'Pickup available'
  319 |     }).click();
  320 | 
  321 |     await page.getByRole('button', {
  322 |       name: /View .* results?/i
  323 |     }).click();
  324 | 
  325 | 
  326 |     // Verify filter button is displaying correctly
  327 |     await expect(
  328 |       page.getByRole('button', {
  329 |         name: 'Shipping: Pickup available'
  330 |       })
  331 |     ).toBeVisible();
  332 | 
  333 |     // Verify results are still showing correctly
  334 |     expect(
  335 |       await searchResultsPage.listingCards.count()
  336 |     ).toBeGreaterThan(0);
  337 |   });
  338 | 
  339 |       test('@regression @filters TC-24: Sort dropdown changes result ordering', async ({ page }) => {
  340 |         await homePage.search('house');
  341 | 
  342 |         await expect(
  343 |           searchResultsPage.listingCards.first()
  344 |         ).toBeVisible({ timeout: 10000 });
  345 | 
  346 |         // Store first result before sorting
  347 |         const firstResultBefore = await searchResultsPage.getFirstListingText();
  348 | 
  349 |         // Change sort option
  350 |         await page.locator('select').selectOption({ label: 'Latest listings' });
  351 | 
  352 |              // Verify the filter button has updated correctly to 'Latest listings;
  353 |         await expect(
  354 |   page.getByLabel('Sort order')
> 355 | ).toHaveValue(/Sort: Latest listings/i);
      |   ^ Error: expect(locator).toHaveValue(expected) failed
  356 | 
  357 |         // Store first result after sorting
  358 |         const firstResultAfter = await searchResultsPage.getFirstListingText();
  359 | 
  360 |         // Verify order changed
  361 |         expect(firstResultBefore).not.toEqual(firstResultAfter);
  362 |       });
  363 | 
  364 |       test('@regression @filters TC-25: Multiple filters work together', async ({ page }) => {
  365 |         await homePage.search('house');
  366 | 
  367 |         await expect(
  368 |           searchResultsPage.listingCards.first()
  369 |         ).toBeVisible({ timeout: 10000 });
  370 | 
  371 |         // Apply location filter
  372 |         await page.locator('text=All Locations').click();
  373 |        await page.getByLabel('Region').selectOption({
  374 |       label: 'Auckland'
  375 |     });
  376 | 
  377 |       // Open New & Used dropdown
  378 |     await page.locator('text=New & Used').click();
  379 | 
  380 |     // Select Used
  381 |     await page.locator('tg-radio-item').filter({
  382 |       hasText: 'Used only'
  383 |     }).click();
  384 | 
  385 | 
  386 |         // Verify results still display
  387 |         await expect(
  388 |           searchResultsPage.listingCards.first()
  389 |         ).toBeVisible({ timeout: 10000 });
  390 | 
  391 |         // Verify URL still contains search
  392 |         expect(page.url()).toContain('search');
  393 |       });
  394 | 
  395 |   });
  396 | });
```