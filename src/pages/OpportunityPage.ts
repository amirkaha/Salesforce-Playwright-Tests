import { Page, Locator, expect } from '@playwright/test';

export class OpportunityPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoad() {
    await this.page.waitForURL(/\/lightning\/r\/Opportunity\/[a-zA-Z0-9]{15,18}\/view/, { timeout: 40000 });
  }

  getRecordIdFromUrl(): string {
    const match = this.page.url().match(/\/Opportunity\/([a-zA-Z0-9]{15,18})\//);
    if (!match) throw new Error(`Could not parse Opportunity Id from URL: ${this.page.url()}`);
    return match[1];
  }

  async assertField(label: string, expected: string) {
    const field = this.page.locator('records-record-layout-item', { hasText: label });
    await expect(field).toContainText(expected, { timeout: 10000 });
  }

  async getFieldText(label: string): Promise<string> {
    const field = this.page.locator('records-record-layout-item', { hasText: label });
    return (await field.innerText()).replace(label, '').trim();
  }

  async openDetailsTab() {
  const detailsTab = this.page.getByRole('tab', { name: 'Details' });
  await expect(detailsTab).toBeVisible({ timeout: 15000 });
  await detailsTab.click();
}
}
