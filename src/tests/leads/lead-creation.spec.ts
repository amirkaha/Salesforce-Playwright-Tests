import { test, expect } from '../../fixtures/base';
import { generateLead } from '../../utils/testData';

test.describe('Part B - Lead Creation & Management', () => {
  test.beforeEach(async ({ page, appLauncherPage }) => {
    await page.goto('/lightning/page/home');
    await appLauncherPage.waffleButtonLoaded();
  });

  test('creates a Lead with unique 18-digit Id and correct detail values', async ({
    page,
    leadPage,
    leadDetailPage,
  }) => {
    const lead = generateLead();
    await leadPage.openNewLeadForm();
    await leadPage.fillLead(lead);
    await leadPage.saveAndExpectSuccess();

    const leadId = await leadDetailPage.getRecordIdFromUrl();
    leadDetailPage.assertValidLeadId(leadId);

    await leadDetailPage.assertFieldValue('Company', lead.company);
    await leadDetailPage.assertFieldValue('Email', lead.email);
    await leadDetailPage.assertStatus('Open - Not Contacted');
    await leadDetailPage.changeStatusViaPath('Working - Contacted');
    await leadDetailPage.assertStatus('Working - Contacted');

    //await leadDetailPage.assertFieldValue('Lead Source', lead.leadSource);
  });

  // test('edits Lead status from Unqualified to Qualified', async ({ page, leadPage, leadDetailPage }) => {
  //   const lead = generateLead();

  //   await page.getByRole('link', { name: 'Leads' }).click();
  //   await leadPage.openNewLeadForm();
  //   await leadPage.fillLead(lead);
  //   await leadPage.saveAndExpectSuccess();

  //   await leadDetailPage.assertStatus('Unqualified');
  //   await leadDetailPage.changeStatusViaPath('Qualified');
  //   await leadDetailPage.assertStatus('Qualified');
  // });
});
