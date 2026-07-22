import { Page } from '@playwright/test';
import { basePage } from './base-page';
import { EtaScenarioData } from '../utility-helper/eta-test-data';

export class etaQuestionAndContactDetailsSubmittedPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async completeForm(data: EtaScenarioData) {
    await this.assertHeading('Your question and contact details');
    await this.fillTextAreaByLabel('Your question', data.questionText);
    await this.fillByLabel('Email address', data.emailAddress);
    await this.fillByLabel('Full name of the person who applied', data.fullName);
    await this.fillByLabel(/^ETA reference number/, data.etaReferenceNumber || '');
    await this.fillByLabel('Passport number (optional)', data.passportNumber || '');
    await this.clickContinue();
  }
}
