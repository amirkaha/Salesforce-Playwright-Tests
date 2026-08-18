import { test } from '../../fixtures/base';
import { config } from '../../utils/env';


test.describe('Part A - Login', () => {
  test('cached session is authenticated on load', async ({ page, loginPage }) => {
    await page.goto('/lightning/page/home');
    await loginPage.assertLoggedIn();
  });

  test('full login flow (cold session, handles OTP challenge if presented)', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const { LoginPage } = await import('../../pages/LoginPage');
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginFirst(config.sfUsername);
    await loginPage.login(config.sfUsername, config.sfPassword + config.sfSecurityToken);
    await loginPage.assertLoggedIn();
    await context.close();
  });
});
