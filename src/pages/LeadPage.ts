import { Page, Locator, expect } from '@playwright/test';
import { LeadData } from '../utils/testData';

export class LeadPage {
  readonly page: Page;
  readonly newButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly leadSourceCombobox: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly titleInput: Locator;
  readonly saveButton: Locator;
  readonly errorBanner: Locator;
  readonly inlineFieldErrors: Locator;
  readonly duplicateBanner: Locator;
  readonly leadsList: Locator;
  readonly newLead: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newButton = page.getByRole('button', { name: 'New', exact: true });
    this.leadsList = page.getByText('Leads List');
    this.newLead = page.getByText('New Lead');
    this.firstNameInput = page.getByLabel('First Name');
    this.lastNameInput = page.getByLabel('Last Name',);
    this.companyInput = page.getByLabel('Company',);
    this.leadSourceCombobox = page.getByRole('combobox', { name: 'Lead Source' })
    this.emailInput = page.getByRole('textbox', { name: 'Email' })
    this.phoneInput = page.getByRole('textbox', { name: 'Phone', exact: true });
    this.titleInput = page.getByLabel('Title',);
    this.saveButton = page.locator('[name="SaveEdit"]');
    this.errorBanner = page.getByRole('dialog', { name: 'We hit a snag.' });
    this.inlineFieldErrors = page.locator('div.slds-form-element__help', { hasText: 'Complete this field.' });
    this.duplicateBanner = page.locator('.duplicate-rule-banner, [data-aura-class="uiModal"]', {
      hasText: 'Possible Duplicates',
    });
  }

  async openNewLeadForm() {
    await expect(this.leadsList).toBeVisible({ timeout: 120000 });
    await this.leadsList.click();
    await expect(this.newLead).toBeVisible({ timeout: 120000 });
    await this.newLead.click();
  }

  async fillLead(data: LeadData) {
    await expect(this.firstNameInput).toBeVisible({ timeout: 200000 });
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.companyInput.fill(data.company);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);
    await this.titleInput.fill(data.title);
    await this.selectLeadSource(data.leadSource);
  }

  async selectLeadSource(source: string) {
    await this.leadSourceCombobox.click();
    const option = this.page.getByRole('option', { name: source });
    await expect(option).toBeVisible({ timeout: 20000 });
    await option.click();
  }

  async save() {
    await this.saveButton.click();
  }

  async saveAndExpectSuccess() {
    await this.save();
    const toast = this.page.locator('span.toastMessage', { hasText: 'was created' });
    await expect(toast).toBeVisible();
    // await expect(this.page.locator('records-highlights2')).toBeVisible({
    //   timeout: 100000,
    // });
  }

  async saveAndExpectValidationError() {
    await this.save();
    const inlineErrorCount = await this.inlineFieldErrors.count();
    expect(inlineErrorCount).toBeGreaterThan(0);
    await expect(this.errorBanner).toBeVisible({ timeout: 8000 });
  }

  async saveAndExpectDuplicateWarning() {
    await this.save();
    const warningVisible = await this.duplicateBanner
      .isVisible({ timeout: 8000 })
      .catch(() => false);
    return warningVisible;
  }
}
