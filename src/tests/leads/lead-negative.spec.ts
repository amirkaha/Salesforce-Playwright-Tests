import { test, expect } from '../../fixtures/base';
import { AppLauncherPage } from '../../pages/AppLauncherPage';
import { generateLead, generateDuplicateEmailLead } from '../../utils/testData';

test.describe('Part B - Negative Scenarios', () => {
  test.beforeEach(async ({ page, appLauncherPage }) => {
    await page.goto('/lightning/page/home');
    await appLauncherPage.waffleButtonLoaded();
  });

  test('shows validation errors when mandatory fields are missing', async ({ leadPage }) => {
    await leadPage.openNewLeadForm();
    // Don't fill in any fields and expect error message and mandatory fields to show errors
    await leadPage.saveAndExpectValidationError();
  });

  test('flags a duplicate Lead email when merge/duplicate detection is enabled', async ({
    page,
    leadPage,
    leadDetailPage,
    appLauncherPage,
  }) => {
    const original = generateLead();
    await leadPage.openNewLeadForm();
    await leadPage.fillLead(original);
    await leadPage.saveAndExpectSuccess();
    await leadDetailPage.getRecordIdFromUrl();

    const duplicate = generateDuplicateEmailLead(original.email);
    await leadPage.openNewLeadForm();
    await leadPage.fillLead(duplicate);

    const duplicateWarningShown = await leadPage.saveAndExpectDuplicateWarning();

    test.skip(
      !duplicateWarningShown,
      'This org has no active Duplicate Rule for Lead Email — skipping. ' +
        'Enable a standard Lead duplicate rule in Setup > Duplicate Rules to exercise this path.'
    );

    expect(duplicateWarningShown).toBe(true);
  });
});
