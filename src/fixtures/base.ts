import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AppLauncherPage } from '../pages/AppLauncherPage';
import { LeadPage } from '../pages/LeadPage';
import { LeadDetailPage } from '../pages/LeadDetailPage';
import { ConvertLeadModal } from '../pages/ConvertLeadModal';
import { OpportunityPage } from '../pages/OpportunityPage';

type Pages = {
  loginPage: LoginPage;
  appLauncherPage: AppLauncherPage;
  leadPage: LeadPage;
  leadDetailPage: LeadDetailPage;
  convertLeadModal: ConvertLeadModal;
  opportunityPage: OpportunityPage;
};

/**
 * Extends Playwright's base test with ready-to-use Page Objects so spec
 * files stay declarative (no `new LoginPage(page)` boilerplate repeated
 * across every test).
 */
export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  appLauncherPage: async ({ page }, use) => use(new AppLauncherPage(page)),
  leadPage: async ({ page }, use) => use(new LeadPage(page)),
  leadDetailPage: async ({ page }, use) => use(new LeadDetailPage(page)),
  convertLeadModal: async ({ page }, use) => use(new ConvertLeadModal(page)),
  opportunityPage: async ({ page }, use) => use(new OpportunityPage(page)),
});

export { expect };
