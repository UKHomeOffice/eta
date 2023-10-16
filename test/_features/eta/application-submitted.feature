@feature @application-submitted

Feature: Question about an Electronic Travel Authorisation(ETA) that I have submitted and I have not received a confirmation email.

  Scenario: I have a question about an ETA application that I have submitted.
    Given I start the 'application-submitted' application journey
        Then I should see 'Is your question about an ETA application that has been submitted?' on the page
        Then I check 'Yes'
        Then I select 'Continue'