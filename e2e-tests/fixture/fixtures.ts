import { test as base } from 'playwright-bdd';
import { basePage } from '../pages/base-page';
import { etaHomePage } from '../pages/eta-home-page';
import { etaApplicationSubmittedPage } from '../pages/eta-application-submitted-page';
import { etaQuestionAboutSubmittedPage } from '../pages/eta-question-about-submitted-page';
import { etaHowDidYouApplyPage } from '../pages/eta-how-did-you-apply-page';
import { etaQuestionAndContactDetailsSubmittedPage } from '../pages/eta-question-and-contact-details-submitted-page';
import { etaQuestionAboutNotSubmittedPage } from '../pages/eta-question-about-not-submitted-page';
import { etaEligibilityPage } from '../pages/eta-eligibility-page';
import { etaHowAreYouApplyingPage } from '../pages/eta-how-are-you-applying-page';
import { etaQuestionOnlinePage } from '../pages/eta-question-online-page';
import { etaQuestionAppPage } from '../pages/eta-question-app-page';
import { etaQuestionAndContactDetailsNotSubmittedPage } from '../pages/eta-question-and-contact-details-not-submitted-page';
import { etaCheckYourAnswersPage } from '../pages/eta-check-your-answers-page';
import { etaConfirmationPage } from '../pages/eta-confirmation-page';
import { EtaScenarioData } from '../utility-helper/eta-test-data';

type Pages = {
  basePage: basePage;
  etaHomePage: etaHomePage;
  etaApplicationSubmittedPage: etaApplicationSubmittedPage;
  etaQuestionAboutSubmittedPage: etaQuestionAboutSubmittedPage;
  etaHowDidYouApplyPage: etaHowDidYouApplyPage;
  etaQuestionAndContactDetailsSubmittedPage: etaQuestionAndContactDetailsSubmittedPage;
  etaQuestionAboutNotSubmittedPage: etaQuestionAboutNotSubmittedPage;
  etaEligibilityPage: etaEligibilityPage;
  etaHowAreYouApplyingPage: etaHowAreYouApplyingPage;
  etaQuestionOnlinePage: etaQuestionOnlinePage;
  etaQuestionAppPage: etaQuestionAppPage;
  etaQuestionAndContactDetailsNotSubmittedPage: etaQuestionAndContactDetailsNotSubmittedPage;
  etaCheckYourAnswersPage: etaCheckYourAnswersPage;
  etaConfirmationPage: etaConfirmationPage;
};

type EtaContext = {
  serviceName?: string;
  scenarioData?: EtaScenarioData;
};

export const test = base.extend<{ pages: Pages; etaContext: EtaContext }>({
  pages: async ({ page }, use) => {
    await use({
      basePage: new basePage(page),
      etaHomePage: new etaHomePage(page),
      etaApplicationSubmittedPage: new etaApplicationSubmittedPage(page),
      etaQuestionAboutSubmittedPage: new etaQuestionAboutSubmittedPage(page),
      etaHowDidYouApplyPage: new etaHowDidYouApplyPage(page),
      etaQuestionAndContactDetailsSubmittedPage: new etaQuestionAndContactDetailsSubmittedPage(page),
      etaQuestionAboutNotSubmittedPage: new etaQuestionAboutNotSubmittedPage(page),
      etaEligibilityPage: new etaEligibilityPage(page),
      etaHowAreYouApplyingPage: new etaHowAreYouApplyingPage(page),
      etaQuestionOnlinePage: new etaQuestionOnlinePage(page),
      etaQuestionAppPage: new etaQuestionAppPage(page),
      etaQuestionAndContactDetailsNotSubmittedPage: new etaQuestionAndContactDetailsNotSubmittedPage(page),
      etaCheckYourAnswersPage: new etaCheckYourAnswersPage(page),
      etaConfirmationPage: new etaConfirmationPage(page)
    });
  },
  etaContext: async ({}, use) => {
    await use({});
  }
});

export const expect = test.expect;
