Feature: Job application flow

  Background:
    Given User navigates to the application

  Scenario: Apply to a recommended job via Easy Apply
    When user clicks on the jobs tab
    Then Jobs based on your preferences label should be visible
    And user clicks on easy apply link
    And user clicks on easy apply button
    And user clicks on next button
    And user clicks on next button
    And user clicks on next button
    Then user clicks on review button
