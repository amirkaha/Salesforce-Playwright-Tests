import { Page, Locator, expect } from '@playwright/test';

export class AppLauncherPage {
  readonly page: Page;
  readonly waffleButton: Locator;
  readonly searchInput: Locator;
  readonly homeTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeTab = page.getByRole('link', { name: 'Home' });
    this.waffleButton = page.locator('button[title="App Launcher"], a.slds-icon-waffle_container');
    this.searchInput = page.locator('one-app-launcher-menu input[type="search"]');
  }

  async waffleButtonLoaded() {
    await expect(this.waffleButton).toBeVisible({ timeout: 100000 });
  }

   async goHome() {
    await expect(this.homeTab).toBeVisible({ timeout: 100000 });
    await this.homeTab.click();
  }

  async open() {
    await this.waffleButton.click();
    await expect(this.searchInput).toBeVisible({ timeout: 100000 });
  }

  async openApp(appName: string) {
    await this.open();
    await this.searchInput.fill(appName);
    const appTile = this.page.locator(`[data-label="${appName}"]`);
    await expect(appTile).toBeVisible({ timeout: 100000 });
    await appTile.click();
  }
}
