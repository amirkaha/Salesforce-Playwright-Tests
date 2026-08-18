import { Page, Locator, expect } from '@playwright/test';
import { fetchVerificationCode } from '../utils/emailVerification';
import { config } from '../utils/env';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly usernameInputFirst: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly verificationCodeInput: Locator;
  readonly verifyButton: Locator;
  readonly dontAskAgainCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.usernameInputFirst = page.getByLabel('Username')
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#Login');
    this.verificationCodeInput = page.locator('#emc');
    this.verifyButton = page.locator('#save');
    this.dontAskAgainCheckbox = page.locator('#RememberDeviceDiv input[type="checkbox"]');
  }

  async goto() {
    await this.page.goto(config.sfLoginUrl);
  }

  async loginFirst(username: string,) {
    await this.usernameInputFirst.fill(username);
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.handleIdentityChallengeIfPresent();
  }

  private async handleIdentityChallengeIfPresent() {
    const challengeVisible = await this.verificationCodeInput
      .isVisible({ timeout: 20000 })
      .catch(() => false);

    if (!challengeVisible) return;

    const code = await fetchVerificationCode();
    await this.verificationCodeInput.fill(code);


    if (await this.dontAskAgainCheckbox.isVisible().catch(() => false)) {
      await this.dontAskAgainCheckbox.check().catch(() => { });
    }

    await this.verifyButton.click();
  }

  async assertLoggedIn() {
    const appLauncher = this.page.locator('a.slds-icon-waffle_container, button[title="App Launcher"]');
    const globalSearch = this.page.locator('input[placeholder="Search..."], .forceSearchInputBox input');
    await expect(appLauncher.or(globalSearch)).toBeVisible({ timeout: 60000 });
  }
}
