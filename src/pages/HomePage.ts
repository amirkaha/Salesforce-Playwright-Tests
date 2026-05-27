import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly logo: Locator;
  readonly loginLink: Locator;
  readonly registerLink: Locator;
  readonly browseMenu: Locator;
  readonly listingButton: Locator;
  readonly watchlistLink: Locator;
  readonly categoryLinks: Locator;

  constructor(page: Page) {
    this.page = page;

    // Search elements
    this.searchInput = page.locator('[name="search"], #searchString, input[type="search"]').first();
    this.searchButton = page.locator('button[type="submit"]:has-text("Search"), button:has-text("Search")').first();

    // Navigation elements
    this.logo = page.locator('a[href="/"], img[alt*="Trade Me"], .logo').first();
    this.loginLink = page.locator('a:has-text("Log in"), a[href*="login"]').first();
    this.registerLink = page.locator('a:has-text("Register"), a[href*="register"]').first();
    this.browseMenu = page.locator('text=Browse, [aria-label="Browse"]').first();
    this.listingButton = page.locator('a:has-text("Start a listing"), a:has-text("Sell")').first();
    this.watchlistLink = page.locator('a:has-text("Watchlist"), a[href*="watchlist"]').first();

    // Category links
    this.categoryLinks = page.locator('nav a, .category-link');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async search(query: string) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
    // Just wait for URL to change to search results page
    await this.page.waitForURL('**/search**', { timeout: 10000 });
    // Give the page a moment to render
    await this.page.waitForTimeout(1000);
  }

  async clickBrowseMenu() {
    await this.browseMenu.click();
  }

  async isLogoVisible(): Promise<boolean> {
    return await this.logo.isVisible();
  }

  async isSearchVisible(): Promise<boolean> {
    return await this.searchInput.isVisible();
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async isHTTPS(): Promise<boolean> {
    return this.page.url().startsWith('https://');
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async getMetaDescription(): Promise<string | null> {
    return await this.page.locator('meta[name="description"]').getAttribute('content');
  }
}