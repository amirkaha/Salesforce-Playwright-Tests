import { test } from '../../fixtures/base';
import { generateLead } from '../../utils/testData';

test.describe('Smoke - cross-browser', () => {
  test('login + create Lead succeeds', async ({ page, appLauncherPage, leadPage, leadDetailPage }) => {
    await page.goto('/lightning/page/home');
    await appLauncherPage.openApp('Sales');
    await page.getByRole('link', { name: 'Leads' }).click();

    const lead = generateLead();
    await leadPage.openNewLeadForm();
    await leadPage.fillLead(lead);
    await leadPage.saveAndExpectSuccess();

    const leadId = await leadDetailPage.getRecordIdFromUrl();
    leadDetailPage.assertValidLeadId(leadId);
  });
});
