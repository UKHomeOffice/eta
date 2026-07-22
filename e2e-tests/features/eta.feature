@EtaRegression
@EtaRegressionCI
Feature: ETA - Electronic Travel Authorisation

  Background:
    Given Test data has been created for "ETA" scenarios

  @RegressionEtaEvcFmrAndLmrCI
  Scenario Outline: ETA - Electronic Travel Authorisation - E2E
    Given I selected the data for scenario "<Scenario ID>" - "<Description>"
    When I visit the Ask a question about Electronic Travel Authorisation Page
    Then I fill out my answers for ETA and submit form

    Examples:
      | Scenario ID | Description                                        |
      | 1           | Not received confirmation email                    |
      | 2           | Not received decision                              |
      | 3           | Question about decision                            |
      | 4           | Do I need ETA                                      |
      | 5           | Applying for ETA on iPhone, question scanning chip |
      | 6           | Applying for ETA online                            |
      | 7           | Question about something else                      |

  @ETA-0008
  Scenario: ETA-0008 - Electronic Travel Authorisation - Applying for ETA on iPhone, question paying for application
    Given I selected the data for scenario "8" - "Applying for ETA on iPhone, question paying for application"
    When I visit the Ask a question about Electronic Travel Authorisation Page
    Then I fill out my answers for ETA and check the guidance link

  @ETA-0009
  Scenario: ETA-0009 - Electronic Travel Authorisation - click guidance link
    Given I visit the ETA Homepage and click the guidance link
