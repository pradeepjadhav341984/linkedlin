import { Given, When, Then } from '@cucumber/cucumber';
import { fixture } from '../../hooks/pageFixture';

console.log('✅ jobSteps.ts loaded');

When('user clicks on the jobs tab', async function () {
  await fixture.jobPage.clickOnJobsTab();
});

Then('Jobs based on your preferences label should be visible', async function () {
  await fixture.jobPage.verifyJobsBasedOnYourPreferencesLabel();
});

When('user clicks on easy apply link', async function () {
  await fixture.jobPage.clickEasyApplyLink();
});

When('user clicks on easy apply button', async function () {
  await fixture.jobPage.clickEasyApplyButton();
});

When('user clicks on next button', async function () {
  await fixture.jobPage.clickNextButton();
});

Then('user clicks on review button', async function () {
  await fixture.jobPage.clickReviewButton();
});
