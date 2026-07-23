import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaCheckYourAnswersPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async submitQuestion() {
    await this.assertHeading('Check your answers');
    await this.clickButtonByName('Accept and send');
  }
}
