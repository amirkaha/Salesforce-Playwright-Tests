import { Page, Locator, expect } from '@playwright/test';

export type ConversionBranch = 'existing' | 'new';

export interface ConversionResult {
  accountBranch: ConversionBranch;
  contactBranch: ConversionBranch;
}

export class ConvertLeadModal {
  readonly page: Page;
  readonly modal: Locator;
  readonly accountSearchInput: Locator;
  readonly contactSearchInput: Locator;
  readonly createNewContact: Locator;
  readonly chooseExistingContact: Locator;
  readonly convertButton: Locator;
  readonly convertLead: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('div[role="dialog"]', { hasText: 'Convert Lead' });
    this.accountSearchInput = page.getByRole('combobox', { name: 'Account Search' });
    this.contactSearchInput = page.getByRole('combobox', { name: 'Contact Search' });
    this.createNewContact = page.locator('label:has-text("Create New Contact")');
    this.chooseExistingContact = page.locator('label:has-text("Choose Existing Contact")');
    this.convertButton = this.modal.getByRole('button', { name: 'Convert', exact: true });
    this.convertLead = page.getByRole('button', { name: 'Convert', exact: true });
  }

  async waitForOpen() {
    await expect(this.modal).toBeVisible({ timeout: 80000 });
  }

  async waitForModalLoad() {
    await expect(this.createNewContact).toBeVisible({ timeout: 80000 });
  }

  async convertLeadFromModal() {
    await expect(this.convertLead).toBeVisible({ timeout: 80000 });
    await this.convertLead.click();
  }

  private async searchAndSelectIfMatch(searchInput: Locator, searchTerm: string, locatorValue: string): Promise<ConversionBranch> {
    await this.waitForModalLoad();
    await searchInput.fill(searchTerm);
    await searchInput.press('Backspace');

    const matchResult = this.page.getByRole('option', { name: locatorValue, exact: true });
    const hasMatch = await matchResult
      .waitFor({ state: 'visible', timeout: 40000 })
      .then(() => true)
      .catch(() => false);

    if (hasMatch) {
      console.log('has account match');
      await matchResult.click();
      return 'existing';
    }
    console.log('no account match');
    return 'new';
  }

  private async searchAndSelectIfMatchContact(searchInput: Locator, searchTerm: string, locatorValue: string): Promise<ConversionBranch> {
    await expect(this.chooseExistingContact).toBeVisible({ timeout: 80000 });
    await this.chooseExistingContact.click();
    await searchInput.click();
    await searchInput.fill(searchTerm);

    const matchResult = this.page.locator('li.lookup__item', { hasText: locatorValue });
    const hasMatch = await matchResult
      .waitFor({ state: 'visible', timeout: 40000 })
      .then(() => true)
      .catch(() => false);

    if (hasMatch) {
      console.log('has contact match');
      await matchResult.click();
      return 'existing';
    }
    console.log('no contact match');
    await this.createNewContact.click();
    return 'new';
  }

  async resolveAndSubmit(lead: { company: string; firstName: string; lastName: string }): Promise<ConversionResult> {
    await this.waitForOpen();

    const accountSearchTerm = lead.company.slice(0, Math.ceil(lead.company.length / 2));
    const contactSearchTerm = `${lead.firstName} ${lead.lastName}`.slice(0, Math.ceil(`${lead.firstName} ${lead.lastName}`.length / 2));
    const contactLocator = `${lead.firstName} ${lead.lastName}${lead.company}`;

    //To test existing account branch, replace lead.company with 'Rossi Systems 5518'
    const accountBranch = await this.searchAndSelectIfMatch(this.accountSearchInput, accountSearchTerm, lead.company);

    // To test existing contact branch, replace the contactLocator with 'Mia Farrell5518Rossi Systems 5518'
    const contactBranch = await this.searchAndSelectIfMatchContact(this.contactSearchInput, contactSearchTerm, contactLocator);


    await this.convertButton.click();
    return { accountBranch, contactBranch };
  }

  async assertConversionSummary(
    lead: { firstName: string; lastName: string; title: string; company: string; phone: string; email: string },
    expectedAccountName: string
  ) {
    const mainHeading = this.page.getByRole('heading', { name: 'Your lead has been converted' });
    await expect(mainHeading).toBeVisible({ timeout: 150000 });

    const getCard = (label: string) => {
      const heading = this.page.getByRole('heading', { name: label, exact: true });
      return heading.locator('xpath=../..');
    };

    const getPrimaryName = async (card: Locator): Promise<string> => {
      const primaryLink = card.locator('div.primaryField').getByRole('link');
      return (await primaryLink.innerText()).trim();
    };

    const accountCard = getCard('Account');
    const contactCard = getCard('Contact');
    const opportunityCard = getCard('Opportunity');
    
    //asserts account card info
    await expect(accountCard).toBeVisible({ timeout: 100000 });
    await expect(contactCard).toBeVisible({ timeout: 100000 });
    await expect(opportunityCard).toBeVisible({ timeout: 100000 });

    const accountName = await getPrimaryName(accountCard);
    expect(accountName).toBe(lead.company);

    const contactName = await getPrimaryName(contactCard);
    expect(contactName).toBe(`${lead.firstName} ${lead.lastName}`);
    
    //asserts contact card info
    const contactCardText = await contactCard.innerText();
    expect(contactCardText).toContain(lead.title);
    expect(contactCardText).toContain(lead.company);
    expect(contactCardText).toContain(lead.phone);
    expect(contactCardText).toContain(lead.email);

    const opportunityName = await getPrimaryName(opportunityCard);
    expect(opportunityName.length).toBeGreaterThan(0);

    return { accountName, contactName, opportunityName };
  }

  async navigateToOpportunityFromConfirmation() {
    const opportunityHeading = this.page.getByRole('heading', { name: 'Opportunity', exact: true });
    const opportunityCard = opportunityHeading.locator('xpath=../..');
    const opportunityLink = opportunityCard.locator('div.primaryField').getByRole('link');

    await opportunityLink.click();
  }
}