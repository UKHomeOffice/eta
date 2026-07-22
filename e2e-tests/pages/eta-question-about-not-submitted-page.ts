import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaQuestionAboutNotSubmittedPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async answerQuestionAboutNotSubmitted(option: string) {
    await this.assertHeading('What is your question about?');
    await this.clickRadioByLabel(option);
    await this.clickContinue();
  }
}
