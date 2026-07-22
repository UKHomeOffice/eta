import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaApplicationSubmittedPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async answerQuestionSubmitted(hasSubmitted: 'Yes' | 'No') {
    await this.assertHeading('Is your question about an ETA application that has been submitted?');
    await this.clickRadioByLabel(hasSubmitted);
    await this.clickContinue();
  }
}
