import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaHomePage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async openEtaHomePage() {
    await this.page.goto('/');
  }

  async acceptCookiesIfPresent() {
    const acceptCookiesButton = this.page.locator('#accept-cookies-button');
    const hideCookiesMessageButton = this.page.locator('#hide-accept-cookie-banner');

    if (await acceptCookiesButton.isVisible()) {
      await acceptCookiesButton.click();
    }

    if (await hideCookiesMessageButton.isVisible()) {
      await hideCookiesMessageButton.click();
    }
  }

  async clickContinueFromStart() {
    await this.clickContinue();
  }

  async clickGuidanceLink() {
    await this.clickLink(/ETA guidance on GOV\.UK/i);
  }

}
