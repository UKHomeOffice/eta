import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class etaHowDidYouApplyPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async answerHowDidYouApply(option: string) {
    await this.assertHeading('How did you apply for your ETA?');
    await this.clickRadioByLabel(option);
    await this.clickContinue();
  }
}
