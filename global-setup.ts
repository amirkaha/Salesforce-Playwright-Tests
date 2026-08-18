import { chromium, FullConfig } from '@playwright/test';
import * as fs from 'fs';
import { LoginPage } from './src/pages/LoginPage';
import { config } from './src/utils/env';

/**
 * Runs once before the whole suite. Logs in exactly one time (handling the
 * email-OTP identity challenge if Salesforce presents it — see
 * src/pages/LoginPage.ts) and writes storageState.json so every subsequent
 * test/browser project reuses the authenticated session instead of
 * re-logging in per test (Part B "cached login" requirement).
 *
 * If a valid, non-expired storageState.json already exists, we skip the
 * login entirely to keep local iteration fast — but we don't just trust the
 * file blindly (Part C.b requires resilience to an invalidated cache), so we
 * do a lightweight liveness check first.
 */
export default async function globalSetup(_config: FullConfig) {
  const statePath = config.storageStatePath;

  if (fs.existsSync(statePath) && (await isSessionStillValid(statePath))) {
    console.log(`[global-setup] Reusing valid cached session at ${statePath}`);
    return;
  }

  console.log('[global-setup] No valid cached session found — performing full login.');
  const browser = await chromium.launch({ headless: config.headless });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginFirst(config.sfUsername);
  await loginPage.login(config.sfUsername, config.sfPassword + config.sfSecurityToken);
  await loginPage.assertLoggedIn();

  fs.mkdirSync('storage', { recursive: true });
  await context.storageState({ path: statePath });
  await browser.close();
  console.log(`[global-setup] Session cached to ${statePath}`);
}

/**
 * Cheap validity check: spin up a throwaway context with the cached state
 * and hit a Lightning URL; if we get bounced back to the login page the
 * session/cookies have expired (password change, org security policy,
 * cache deleted in CI, etc.) and a fresh login is required.
 */
async function isSessionStillValid(statePath: string): Promise<boolean> {
  try {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ storageState: statePath });
    const page = await context.newPage();
    await page.goto(`${config.baseUrl}/lightning/page/home`, { waitUntil: 'domcontentloaded' });
    const stillOnLoginPage = page.url().includes('/login');
    await browser.close();
    return !stillOnLoginPage;
  } catch {
    return false;
  }
}
