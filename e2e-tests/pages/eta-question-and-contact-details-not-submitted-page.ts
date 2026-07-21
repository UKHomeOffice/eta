import { Page } from '@playwright/test';
import { basePage } from './base-page';
import { EtaScenarioData } from '../utility-helper/eta-test-data';

export class etaQuestionAndContactDetailsNotSubmittedPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async completeForm(data: EtaScenarioData) {
    await this.assertHeading('Your question and contact details');
    await this.fillTextAreaByLabel('Your question', data.questionText);
    await this.fillByLabel('Your full name', data.fullName);
    await this.fillByLabel('Email address', data.emailAddress);
    await this.fillByLabel('Passport number (optional)', data.passportNumber || '');
    await this.clickContinue();
  }

  async completeFormAndClickGuidanceLink(data: EtaScenarioData) {
    await this.assertHeading('Your question and contact details');
    await this.fillTextAreaByLabel('Your question', data.questionText);
    await this.fillByLabel('Your full name', data.fullName);
    await this.fillByLabel('Email address', data.emailAddress);
    await this.fillByLabel('Passport number (optional)', data.passportNumber || '');
    await this.clickLink(/ETA guidance on GOV\.UK/i);
  }
}
