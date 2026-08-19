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
    console.log('[DEBUG] On login page:', page.url());
    await loginPage.loginFirst(config.sfUsername);
    console.log('[DEBUG] After loginFirst, URL:', page.url());
    await loginPage.login(config.sfUsername, config.sfPassword + config.sfSecurityToken);
    console.log('[DEBUG] After login, URL:', page.url());
    await loginPage.assertLoggedIn();
    await context.close();
  });
});
