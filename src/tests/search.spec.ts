import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test.describe('Search Functionality - Car Park Tests', () => {
  let homePage: HomePage;
  let searchResultsPage: SearchResultsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.goto();
  });

  test('@smoke @search TC-01: Search for "car park" returns relevant listings', async ({ page }) => {
    await homePage.search('car park');

    // Verify results are displayed
    const hasResults = await searchResultsPage.hasResults();
    expect(hasResults).toBeTruthy();

    // Verify URL contains search parameter
    expect(page.url()).toContain('search');

    // Verify result count is greater than 0
    const resultCount = await searchResultsPage.getResultCount();
    expect(resultCount).toBeGreaterThan(0);

    // Verify listings contain "car park" in their title or description
    const listings = await searchResultsPage.getListingTexts();
    const relevantListings = listings.filter(text =>
      text.toLowerCase().includes('car park') ||
      text.toLowerCase().includes('carpark')
    );

    expect(relevantListings.length).toBeGreaterThan(0);
  });

  test('@regression @search TC-02: First result on page 1 and page 2 are different', async ({ page }) => {

    await homePage.search('house');

    // Wait for results to load
    await expect(
      searchResultsPage.listingCards.first()
    ).toBeVisible({
      timeout: 15000
    });

    // Get first listing text from page 1
    const firstPageResult = await searchResultsPage
      .listingCards
      .first()
      .textContent();

    console.log('Page 1 First Result:', firstPageResult);

    // Click page 2
    await page.locator("//a[@aria-label='Page 2']").click();

    await expect(
      page.locator("//a[@aria-label='Current page, page 2']")
    ).toBeVisible({
      timeout: 10000
    });

    await expect(
      searchResultsPage.listingCards.first()
    ).toBeVisible({
      timeout: 15000
    });

    // Get first listing text from page 2
    const secondPageResult = await searchResultsPage
      .listingCards
      .first()
      .textContent();

    console.log('Page 2 First Result:', secondPageResult);

    // Verify results differ
    expect(firstPageResult?.trim())
      .not.toBe(secondPageResult?.trim());

  });

  test('@regression @search TC-03: All "car park" search results contain relevant keywords', async ({ page }) => {
    await homePage.search('car park');

    const hasResults = await searchResultsPage.hasResults();
    expect(hasResults).toBeTruthy();

    // Get all listing titles and verify they relate to car park
    const listings = await searchResultsPage.getListingTexts();

    // At least some results should contain car park related terms
    const carParkListings = listings.filter(text => {
      const lowerText = text.toLowerCase();
      return lowerText.includes('car park') ||
        lowerText.includes('carpark') ||
        lowerText.includes('parking') ||
        lowerText.includes('park');
    });

    // Expect at least 50% of results to be relevant
    expect(carParkListings.length).toBeGreaterThanOrEqual(listings.length * 0.5);
  });

  test('@smoke @search TC-04: "car park" search displays listings with correct information', async ({ page }) => {
    await homePage.search('car park');

    const hasResults = await searchResultsPage.hasResults();
    expect(hasResults).toBeTruthy();

    // Verify first listing has required elements
    const firstListing = await searchResultsPage.getFirstListing();
    expect(firstListing).toBeTruthy();

    // Verify listing text contains car park related terms
    const firstListingText = await searchResultsPage.getFirstListingText();
    const hasCarParkTerm =
      firstListingText.toLowerCase().includes('car park') ||
      firstListingText.toLowerCase().includes('carpark') ||
      firstListingText.toLowerCase().includes('parking');

    expect(hasCarParkTerm).toBeTruthy();
  });

  test('@smoke @search TC-05: Search URL contains correct search parameters', async ({ page }) => {
    await homePage.search('car park');

    // Verify URL contains search-related path
    expect(page.url()).toContain('search');

    // Verify URL contains the search terms
    const url = page.url();
    expect(url.toLowerCase()).toContain('car');
    expect(url.toLowerCase()).toContain('park');

    console.log('Search URL:', url);
  });

  test('@regression @search TC-06: Search with numeric values returns results', async ({ page }) => {
    await homePage.search('listing 1');

    const hasResults = await searchResultsPage.hasResults();
    expect(hasResults).toBeTruthy();
  });

  test('@regression @search TC-08: Search works from homepage', async ({ page }) => {
    // Verify search is visible and functional
    const isSearchVisible = await homePage.isSearchVisible();
    expect(isSearchVisible).toBeTruthy();

    await homePage.search('guitar');

    // Verify navigation to results page
    await page.waitForURL(/.*search.*/);
  });
});

test.describe('Search Functionality - Negative Scenarios', () => {
  let homePage: HomePage;
  let searchResultsPage: SearchResultsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.goto();
  });

  test('@regression @search TC-07: Search with empty input shows appropriate behavior', async ({ page }) => {
    await homePage.searchInput.fill('');
    await homePage.searchButton.click();

    // Should either stay on homepage or show validation
    // Verify we don't get an error page
    const url = page.url();
    expect(url).not.toContain('error');
  });

  test('@regression @search TC-08: Search with special characters only returns no results gracefully', async ({ page }) => {
    await homePage.search('@#$%^&*()');

    // Should show no results message or handle gracefully
    const hasNoResults = await searchResultsPage.hasNoResultsMessage();
    const hasResults = await searchResultsPage.hasResults();

    // Either no results message or actually no results
    expect(hasNoResults || !hasResults).toBeTruthy();
  });

  test('@regression @search TC-09: Search with extremely long string handles gracefully', async ({ page }) => {
    const longString = 'a'.repeat(500);
    await homePage.search(longString);

    // Should not crash or show error page
    expect(page.url()).not.toContain('error');
  });

  test('@regression @search TC-10: Search with non-existent terms shows no results message', async ({ page }) => {
    await homePage.search('xyzabc123nonexistentitem999');

    const hasNoResults = await searchResultsPage.hasNoResultsMessage();
    expect(hasNoResults).toBeTruthy();

  });
});

test.describe('Search Functionality - Edge Cases', () => {
  let homePage: HomePage;
  let searchResultsPage: SearchResultsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.goto();
  });


  test('@regression @search TC-11: Search with mixed case returns case-insensitive results', async ({ page }) => {
    await homePage.search('HoUse');

    const hasResults = await searchResultsPage.hasResults();
    expect(hasResults).toBeTruthy();
  });

  test('@regression @search TC-12: Search with accents works correctly', async ({ page }) => {
    await homePage.search('Mānuka Honey');

    // Should handle special characters without error
    expect(page.url()).not.toContain('error');
  });
});

test.describe('Search Functionality - Non-Functional Tests', () => {
  let homePage: HomePage;
  let searchResultsPage: SearchResultsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.goto();
  });

  test('@performance @search TC-13: Search results load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await homePage.search('house');
    await expect(
      searchResultsPage.listingCards.first()
    ).toBeVisible({ timeout: 10000 });
    const endTime = Date.now();

    const loadTime = endTime - startTime;
    expect(loadTime).toBeLessThan(3000); // 3 seconds threshold
  });

  test.describe('Search Filters - House Search', () => {

    test('@regression @filters TC-14: Category dropdown filters results', async ({ page }) => {
      await homePage.search('house');

      // Wait for results
      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Open category dropdown
      await page.locator('text=Category').click();

      // Select category option
      await page.locator('text=Trade Me Property').first().click();


      // Verify results still exist
      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Optional URL verification
      await expect(
        page.locator('tm-search-header-heading')).toBeVisible();

    });

    test('@regression @filters TC-15: Location dropdown filters results', async ({ page }) => {
      await homePage.search('house');

      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Open location dropdown
      await page.locator('text=All Locations').click();
      await page.getByLabel('Region').selectOption({
        label: 'Auckland'
      });
      await page.getByLabel('District').selectOption({
        label: 'North Shore'
      });

      await page.getByRole('button', {
        name: /View .* results?/i
      }).click();

      // Assert the button with both classes contains "North Shore"
      await expect(page.locator('button:has-text("North Shore")')).toBeVisible({ timeout: 3000 });
    });

    test('@regression @search TC-16: Clicking X clears the search bar', async ({ page }) => {

      // Navigate to homepage
      await homePage.goto();

      // Enter search text
      await homePage.searchInput.fill('house');

      // Verify text entered
      await expect(homePage.searchInput).toHaveValue('house');

      // Click clear/X button
      await page.locator('[aria-label="Clear input"]').click();

      // Assert search input is now empty
      await expect(homePage.searchInput).toHaveValue('');
    });

    test('@regression @filters TC-17: Condition dropdown filters results', async ({ page }) => {
      await homePage.search('house');

      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Open New & Used dropdown
      await page.locator('text=New & Used').click();

      await expect(
        page.getByRole('button', {
          name: /View .* results?/i
        })
      ).toBeVisible({
        timeout: 10000
      });

      // Select Used
      await page.locator('tg-radio-item').filter({
        hasText: 'Used only'
      }).click();

      await page.getByRole('button', {
        name: /View .* results?/i
      }).click();


      // Verify results displayed
      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });
    });

    test('@smoke @filters TC-18: Shipping dropdown displays results correctly', async ({ page }) => {
      await homePage.search('suzuki');

      // Open shipping dropdown
      await page.locator('text=Shipping: All').click();

      // Select Pickup
      await page.locator('tg-radio-item').filter({
        hasText: 'Pickup available'
      }).click();

      await page.getByRole('button', {
        name: /View .* results?/i
      }).click();


      // Verify filter button is displaying correctly
      await expect(
        page.getByRole('button', {
          name: 'Shipping: Pickup available'
        })
      ).toBeVisible();

      // Verify results are still showing correctly
      expect(
        await searchResultsPage.listingCards.count()
      ).toBeGreaterThan(0);
    });

    test('@regression @filters TC-19: Sort dropdown changes result ordering', async ({ page }) => {
      await homePage.search('house');

      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Store first result before sorting
      const firstResultBefore = await searchResultsPage.getFirstListingText();

      // Change sort option
      await page.locator('select').selectOption({ label: 'Latest listings' });

      // Verify the filter button has updated correctly to 'Latest listings;
      await expect(
        page.getByLabel('Sort order')
      ).toHaveValue('7: ExpiryDesc');

      // Wait until the sort box shows "Latest listings"
      await expect(page.locator('.o-select__body')).toContainText('Latest listings', { timeout: 10000 });

      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Verify order changed (measure first result with second result)
      await expect(page.locator('tm-marketplace-search-card').first()).not.toContainText(firstResultBefore, { timeout: 10000 });

    });

    test('@regression @filters TC-20: Multiple filters work together', async ({ page }) => {
      await homePage.search('house');

      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Apply location filter
      await page.locator('text=All Locations').click();
      await page.getByLabel('Region').selectOption({
        label: 'Auckland'
      });

      // Open New & Used dropdown
      await page.locator('text=New & Used').click();

      // Select Used
      await page.locator('tg-radio-item').filter({
        hasText: 'Used only'
      }).click();

      // Verify results still display
      await expect(
        searchResultsPage.listingCards.first()
      ).toBeVisible({ timeout: 10000 });

      // Verify URL still contains search
      expect(page.url()).toContain('search');
    });
  });
});