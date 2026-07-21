export type YesNo = 'Yes' | 'No';

export type EtaScenarioData = {
  scenarioId: string;
  description: string;
  applicationSubmitted: YesNo;
  yesQuestionAbout?: string;
  noQuestionAbout?: string;
  howApplyingForEta?: string;
  howAppliedForEta?: string;
  questionAppOption?: string;
  questionOnlineOption?: string;
  etaReferenceNumber?: string;
  passportNumber?: string;
  questionText: string;
  emailAddress: string;
  fullName: string;
};

const DEFAULT_QUESTION = 'Automation Sample question';
const DEFAULT_EMAIL = 'sas-hof-test@digital.homeoffice.gov.uk';
const DEFAULT_FULL_NAME = 'Automation Test User';

function baseData(scenarioId: string, description: string, applicationSubmitted: YesNo): EtaScenarioData {
  return {
    scenarioId,
    description,
    applicationSubmitted,
    questionText: DEFAULT_QUESTION,
    emailAddress: DEFAULT_EMAIL,
    fullName: DEFAULT_FULL_NAME
  };
}

export function getEtaScenarioData(scenarioId: string, description: string): EtaScenarioData {
  const id = scenarioId.trim();
  const expectedDescription = description.trim();

  let data: EtaScenarioData;

  switch (id) {
    case '1':
      data = {
        ...baseData('1', 'Not received confirmation email', 'Yes'),
        yesQuestionAbout: 'I have not received a confirmation email',
        howAppliedForEta: 'UK ETA app on iPhone',
        etaReferenceNumber: '2021-1111-1234-0000',
        passportNumber: '1208297A'
      };
      break;
    case '2':
      data = {
        ...baseData('2', 'Not received decision', 'Yes'),
        yesQuestionAbout: 'I have not received a decision',
        howAppliedForEta: 'Online',
        etaReferenceNumber: '2021-1111-1234-1111'
      };
      break;
    case '3':
      data = {
        ...baseData('3', 'Question about decision', 'Yes'),
        yesQuestionAbout: 'Question about the decision on my ETA',
        etaReferenceNumber: '2021-1111-1111-1234'
      };
      break;
    case '4':
      data = {
        ...baseData('4', 'Do I need ETA', 'No'),
        noQuestionAbout: 'Do I need an ETA?',
        etaReferenceNumber: '2021-1234-1234-1234'
      };
      break;
    case '5':
      data = {
        ...baseData('5', 'Applying for ETA on iPhone, question scanning chip', 'No'),
        noQuestionAbout: 'Applying for an ETA',
        howApplyingForEta: 'UK ETA app on iPhone',
        questionAppOption: 'Scanning the chip in my passport',
        etaReferenceNumber: '2021-1234-1234-1111',
        passportNumber: '1208297A'
      };
      break;
    case '6':
      data = {
        ...baseData('6', 'Applying for ETA online', 'No'),
        noQuestionAbout: 'Applying for an ETA',
        howApplyingForEta: 'Online',
        questionOnlineOption: 'Paying for my application',
        etaReferenceNumber: '2021-1111-1234-1234'
      };
      break;
    case '7':
      data = {
        ...baseData('7', 'Question about something else', 'Yes'),
        yesQuestionAbout: 'Something else',
        howAppliedForEta: 'Online',
        etaReferenceNumber: '2021-6789-1234-4567'
      };
      break;
    case '8':
      data = {
        ...baseData('8', 'Applying for ETA on iPhone, question paying for application', 'No'),
        noQuestionAbout: 'Applying for an ETA',
        howApplyingForEta: 'UK ETA app on iPhone',
        questionAppOption: 'Paying for my application',
        passportNumber: '1208297A'
      };
      break;
    default:
      throw new Error(`Unsupported ETA scenario id: ${scenarioId}`);
  }

  if (data.description !== expectedDescription) {
    throw new Error(
      `Scenario description mismatch for id ${scenarioId}. ` +
      `Expected "${data.description}" but received "${description}".`
    );
  }

  return data;
}
