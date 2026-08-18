import { Page, Locator, expect } from '@playwright/test';

const LEAD_ID_REGEX = /^00Q[a-zA-Z0-9]{15}$/; // Salesforce 18-char Lead prefix is "00Q"

export class LeadDetailPage {
  readonly page: Page;
  readonly recordTitle: Locator;
  readonly statusPath: Locator;
  readonly convertButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.recordTitle = page.locator('.slds-page-header__title, records-highlights2 h1');
    this.statusPath = page.locator('.slds-path__nav');
    this.convertButton = page.getByRole('button', { name: 'Convert' });
  }

  async getRecordIdFromUrl(): Promise<string> {
    await expect(this.page.getByRole('button', { name: 'Show more actions' })).toBeVisible();
    await this.page.waitForURL(/\/lightning\/r\/(Lead\/)?[a-zA-Z0-9]{15,18}\/view/, { timeout: 20000 });
    const match = this.page.url().match(/\/lightning\/r\/(?:Lead\/)?([a-zA-Z0-9]{15,18})\//);
    if (!match) throw new Error(`Could not parse Lead Id from URL: ${this.page.url()}`);
    return match[1];
  }

  assertValidLeadId(id: string) {
    expect(id.length, 'Lead Id should be the 18-character case-safe form').toBe(18);
    expect(id, 'Lead Id should carry the 00Q key prefix').toMatch(LEAD_ID_REGEX);
  }

  async assertFieldValue(label: string, expected: string) {
    const field = this.page.locator('records-highlights-details-item', { hasText: label });
    await expect(field).toContainText(expected, { timeout: 10000 });
  }

  async changeStatusViaPath(newStatus: string) {
    const stage = this.statusPath.getByRole('option', { name: newStatus });
    await stage.click();
    await this.page.getByRole('button', { name: 'Mark as Current Status' }).click();
    const toast = this.page.locator('span.toastMessage', { hasText: 'Status changed successfully' });
    await expect(toast).toBeVisible();
    await expect(this.statusPath.locator('.slds-is-current')).toContainText(newStatus);
  }

  async assertStatus(expected: string) {
    await expect(this.statusPath.locator('.slds-is-current')).toContainText(expected);
  }

  async clickConvert() {
    await this.page.getByRole('button', { name: 'Show more actions' }).click();
    await this.page.getByRole('menuitem', { name: 'Convert' }).click();
  }
}
