import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';
import { getEtaScenarioData } from '../utility-helper/eta-test-data';

export const { Given, When, Then } = createBdd(test);

const ETA_GUIDANCE_URL = 'https://www.gov.uk/eta';
Given('Test data has been created for {string} scenarios', async ({ etaContext }, serviceName: string) => {
    if (serviceName !== 'ETA') {
        throw new Error(`Unsupported service data set: ${serviceName}`);
    }
    etaContext.serviceName = serviceName;
});

Given('I selected the data for scenario {string} - {string}', async ({ etaContext }, scenarioId: string, description: string) => {
    etaContext.scenarioData = getEtaScenarioData(scenarioId, description);
});

When('I visit the Ask a question about Electronic Travel Authorisation Page', async ({ pages }) => {
    await pages.etaHomePage.openEtaHomePage();
    await pages.etaHomePage.acceptCookiesIfPresent();
    await pages.etaHomePage.clickContinueFromStart();
});

Then('I fill out my answers for ETA and submit form', async ({ pages, etaContext }) => {
    const data = etaContext.scenarioData;
    if (!data) {
        throw new Error('No ETA scenario data selected.');
    }

    await pages.etaApplicationSubmittedPage.answerQuestionSubmitted(data.applicationSubmitted);

    if (data.applicationSubmitted === 'Yes') {
        if (!data.yesQuestionAbout) {
            throw new Error('Missing yes-question option for submitted flow.');
        }

        await pages.etaQuestionAboutSubmittedPage.answerQuestionAboutSubmitted(data.yesQuestionAbout);

        if (data.yesQuestionAbout !== 'Question about the decision on my ETA') {
            if (!data.howAppliedForEta) {
                throw new Error('Missing "how did you apply" option for submitted flow.');
            }
            await pages.etaHowDidYouApplyPage.answerHowDidYouApply(data.howAppliedForEta);
        }

        await pages.etaQuestionAndContactDetailsSubmittedPage.completeForm(data);
        await pages.etaCheckYourAnswersPage.submitQuestion();
        await pages.etaConfirmationPage.assertQuestionSubmitted();
        return;
    }

    if (!data.noQuestionAbout) {
        throw new Error('Missing no-question option for not-submitted flow.');
    }

    await pages.etaQuestionAboutNotSubmittedPage.answerQuestionAboutNotSubmitted(data.noQuestionAbout);

    if (data.noQuestionAbout === 'Applying for an ETA') {
        if (!data.howApplyingForEta) {
            throw new Error('Missing "how are you applying" option for not-submitted flow.');
        }

        await pages.etaHowAreYouApplyingPage.answerHowAreYouApplying(data.howApplyingForEta);

        if (data.howApplyingForEta === 'Online') {
            if (!data.questionOnlineOption) {
                throw new Error('Missing question-online option for not-submitted flow.');
            }
            await pages.etaQuestionOnlinePage.answerQuestionOnline(data.questionOnlineOption);
        } else {
            if (!data.questionAppOption) {
                throw new Error('Missing question-app option for not-submitted flow.');
            }
            await pages.etaQuestionAppPage.answerQuestionApp(data.questionAppOption);
        }
    } else if (data.noQuestionAbout === 'Do I need an ETA?') {
        await pages.etaEligibilityPage.clickContinueAndAskQuestion();
    }

    await pages.etaQuestionAndContactDetailsNotSubmittedPage.completeForm(data);
    await pages.etaCheckYourAnswersPage.submitQuestion();
    await pages.etaConfirmationPage.assertQuestionSubmitted();
});

Then('I fill out my answers for ETA and check the guidance link', async ({ pages, etaContext, page }) => {
    const data = etaContext.scenarioData;
    if (!data) {
        throw new Error('No ETA scenario data selected.');
    }

    await pages.etaApplicationSubmittedPage.answerQuestionSubmitted(data.applicationSubmitted);

    if (!data.noQuestionAbout || data.noQuestionAbout !== 'Applying for an ETA') {
        throw new Error('Guidance-link journey expects "Applying for an ETA" path.');
    }

    await pages.etaQuestionAboutNotSubmittedPage.answerQuestionAboutNotSubmitted(data.noQuestionAbout);

    if (!data.howApplyingForEta) {
        throw new Error('Missing "how are you applying" option for guidance-link flow.');
    }

    await pages.etaHowAreYouApplyingPage.answerHowAreYouApplying(data.howApplyingForEta);

    if (data.howApplyingForEta === 'Online') {
        if (!data.questionOnlineOption) {
            throw new Error('Missing question-online option for guidance-link flow.');
        }
        await pages.etaQuestionOnlinePage.answerQuestionOnline(data.questionOnlineOption);
    } else {
        if (!data.questionAppOption) {
            throw new Error('Missing question-app option for guidance-link flow.');
        }
        await pages.etaQuestionAppPage.answerQuestionApp(data.questionAppOption);
    }

    await pages.etaQuestionAndContactDetailsNotSubmittedPage.completeFormAndClickGuidanceLink(data);
    await page.waitForLoadState('domcontentloaded');
    await test.expect(page).toHaveURL(ETA_GUIDANCE_URL);
});

Given('I visit the ETA Homepage and click the guidance link', async ({ pages, page }) => {
    await pages.etaHomePage.openEtaHomePage();
    await pages.etaHomePage.acceptCookiesIfPresent();

    pages.etaHomePage.clickGuidanceLink();
    await page.waitForLoadState('domcontentloaded');
    await test.expect(page).toHaveURL(ETA_GUIDANCE_URL);
});