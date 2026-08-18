import { test, expect } from '../../fixtures/base';
import { generateLead } from '../../utils/testData';

test.describe('Part B - Lead to Opportunity Conversion', () => {
  test.beforeEach(async ({ page, appLauncherPage }) => {
    await page.goto('/lightning/page/home');
    await appLauncherPage.waffleButtonLoaded();
  });

  test('converts a Lead, respecting existing Account/Contact matches, and lands on the Opportunity', async ({
    page,
    leadPage,
    leadDetailPage,
    convertLeadModal,
    opportunityPage,
  }) => {
    const lead = generateLead();
    await leadPage.openNewLeadForm();
    await leadPage.fillLead(lead);
    await leadPage.saveAndExpectSuccess();
    await leadDetailPage.getRecordIdFromUrl();
    await leadDetailPage.clickConvert();
    const result = await convertLeadModal.resolveAndSubmit(lead);
     const summary = await convertLeadModal.assertConversionSummary(lead, 'Test Company');

    await convertLeadModal.navigateToOpportunityFromConfirmation();
    await opportunityPage.waitForLoad();
    await opportunityPage.openDetailsTab();

    const opportunityId = opportunityPage.getRecordIdFromUrl();
    expect(opportunityId).toMatch(/^006[a-zA-Z0-9]{15}$/);

    await opportunityPage.assertField('Stage', 'Prospecting');
    await opportunityPage.assertField('Opportunity Owner', 'Amir Yousef');
    await opportunityPage.assertField('Account Name', lead.company);
    await opportunityPage.assertField('Opportunity Name', lead.company);
    await page.waitForTimeout(20000);
  });
});
