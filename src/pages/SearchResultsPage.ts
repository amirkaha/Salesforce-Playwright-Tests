import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly searchResults: Locator;
  readonly searchInput: Locator;
  readonly sortDropdown: Locator;
  readonly filterOptions: Locator;
  readonly resultCount: Locator;
  readonly noResultsMessage: Locator;
  readonly listingCards: Locator;
  readonly pagination: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchResults = page.locator('.search-results, .listing-results, [data-testid="search-results"]');
    this.searchInput = page.locator('[name="search"], #searchString, input[type="search"]').first();
    this.sortDropdown = page.locator('select[name="sort"], .sort-dropdown').first();
    this.filterOptions = page.locator('.filter, .facet, [role="checkbox"]');
    this.resultCount = page.locator('.result-count, .search-count').first();
    this.noResultsMessage = page.locator('tm-no-results');
    this.listingCards = page.locator('tm-search-card-switcher');

    this.pagination = page.locator('.pagination, nav[aria-label="pagination"]');
  }

  async getResultCount(): Promise<number> {
    const count = await this.listingCards.count();
    return count;
  }

  async hasResults(): Promise<boolean> {
    return await this.listingCards.first().isVisible({ timeout: 15000 }).catch(() => false);
  }

  async hasNoResultsMessage(): Promise<boolean> {
    return await this.noResultsMessage.isVisible({ timeout: 3000 }).catch(() => false);
  }


  async clickFirstResult() {
    await this.listingCards.first().click();
  }

  async applyFilter(filterName: string) {
    await this.page.locator(`text=${filterName}`).first().click();
  }

  async selectSort(sortOption: string) {
    await this.sortDropdown.selectOption({ label: sortOption });
  }

  async isPaginationVisible(): Promise<boolean> {
    return await this.pagination.isVisible({ timeout: 3000 }).catch(() => false);
  }

  async getListingTexts(): Promise<string[]> {
    const listingCards = this.page.locator('tm-marketplace-search-card');

    await listingCards.first().waitFor({ state: 'visible', timeout: 10000 });

    const count = await listingCards.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await listingCards.nth(i).textContent();
      if (text) {
        texts.push(text.trim());
      }
    }

    return texts;
  }

  async getFirstListing() {
    const firstListing = this.page.locator('tm-marketplace-search-card').first();
    await firstListing.waitFor({ state: 'visible', timeout: 10000 });
    return firstListing;
  }

  async getFirstListingText(): Promise<string> {
    const firstListing = await this.getFirstListing();
    const text = await firstListing.textContent();
    return text ? text.trim() : '';
  }
}