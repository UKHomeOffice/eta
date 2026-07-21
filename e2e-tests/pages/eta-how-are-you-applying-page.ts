import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaHowAreYouApplyingPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async answerHowAreYouApplying(option: string) {
    await this.assertHeading('How are you applying for your ETA?');
    await this.clickRadioByLabel(option);
    await this.clickContinue();
  }
}
