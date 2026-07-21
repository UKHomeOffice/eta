import { expect, Locator, Page } from '@playwright/test';

export class basePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertHeading(headingText: string) {
    await expect(this.page.getByRole('heading', { level: 1, name: headingText })).toBeVisible();
  }

  async clickContinue() {
    const continueButton = this.page.getByRole('button', { name: /^Continue$/i });
    if (await continueButton.count()) {
      await continueButton.first().click();
      return;
    }

    const continueInput = this.page.locator("input[type='submit'][value='Continue']");
    await continueInput.click();
  }

  async clickButtonByName(buttonName: string) {
    const button = this.page.getByRole('button', { name: buttonName });
    if (await button.count()) {
      await button.first().click();
      return;
    }

    await this.page.locator(`input[type='submit'][value='${buttonName}']`).first().click();
  }

  async clickRadioByLabel(optionLabel: string) {
    const radio = this.page.getByRole('radio', { name: optionLabel });
    await radio.check();
  }

  async fillByLabel(label: string | RegExp, value: string) {
    if (!value) {
      return;
    }

    const byLabel = this.page.getByLabel(label).first();
    if (await byLabel.count()) {
      await byLabel.fill(value);
      return;
    }

    await this.page.getByRole('textbox', { name: label }).first().fill(value);
  }

  async fillTextAreaByLabel(label: string | RegExp, value: string) {
    const byLabel = this.page.getByLabel(label).first();
    if (await byLabel.count()) {
      await byLabel.fill(value);
      return;
    }

    await this.page.getByRole('textbox', { name: label }).first().fill(value);
  }

  async clickLink(linkText: string | RegExp) {
    await this.page.getByRole('link', { name: linkText }).click();
  }

  async expectUrlToContain(path: string) {
    await expect(this.page).toHaveURL(new RegExp(`${path}$`));
  }

  get heading(): Locator {
    return this.page.getByRole('heading', { level: 1 });
  }
}
