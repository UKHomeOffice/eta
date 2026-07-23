import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaQuestionAppPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async answerQuestionApp(option: string) {
    await this.assertHeading('Which part of the ETA application is your question about?');
    await this.clickRadioByLabel(option);
    await this.clickContinue();
  }
}
