import { Page, expect } from '@playwright/test';
import { basePage } from './base-page';

export class etaConfirmationPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async assertQuestionSubmitted() {
    await expect(this.heading).toHaveText('Question submitted');
  }
}
