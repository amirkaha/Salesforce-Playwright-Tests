import { test, expect } from '../../fixtures/base';
import { generateLead } from '../../utils/testData';

test.describe('Part B (Bonus) - API/Response Validation', () => {
  test('validates the Lead-convert network response payload', async ({
    page,
    appLauncherPage,
    leadPage,
    leadDetailPage,
    convertLeadModal,
  }) => {
    await page.goto('/lightning/page/home');
    await appLauncherPage.waffleButtonLoaded();

    const lead = generateLead();
    await leadPage.openNewLeadForm();
    await leadPage.fillLead(lead);
    await leadPage.saveAndExpectSuccess();
    await leadDetailPage.getRecordIdFromUrl();

    const capturedResponses: string[] = [];
    page.on('response', async (response) => {
      if (response.url().includes('/aura') && response.request().method() === 'POST') {
        try {
          const raw = await response.text();
          capturedResponses.push(raw);
        } catch {
        }
      }
    });

    await leadDetailPage.clickConvert();
    await convertLeadModal.waitForModalLoad();
    await convertLeadModal.convertLeadFromModal();

    const mainHeading = page.getByRole('heading', { name: 'Your lead has been converted' });
    await expect(mainHeading).toBeVisible({ timeout: 150000 });

    let matchedPayload: string | null = null;
    let idMatch: RegExpMatchArray | null = null;

    for (const raw of capturedResponses) {
      const jsonText = raw.replace(/^while\s*\(1\)\s*;\s*/, '');
      const match = jsonText.match(/"(00[16][a-zA-Z0-9]{12,15})"/);
      if (match) {
        matchedPayload = jsonText;
        idMatch = match;
        break;
      }
    }

    expect(idMatch, 'No captured Aura response contained a valid Account/Opportunity Id').not.toBeNull();
    expect(matchedPayload).not.toBeNull();
    expect(matchedPayload!.includes('"exceptionEvent"')).toBe(false);
  });
});