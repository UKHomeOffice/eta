import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaEligibilityPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async clickContinueAndAskQuestion() {
    await this.assertHeading('Find out if you need an ETA');
    await this.clickButtonByName('Continue and ask question');
  }
}
