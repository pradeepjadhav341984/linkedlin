
console.log("✅ loginSteps.ts loaded");
import{Given,When,Then} from '@cucumber/cucumber'
import { fixture } from "../../hooks/pageFixture"
Given('User navigates to the application',async function(){
  await fixture.loginPage.navigate();
});
When('user click on sign button',async function () {
  await fixture.loginPage.clickOnSignin();
});
When('user should enter user name',async function () {
  await fixture.loginPage.enterUserName();
  
})
When('user should enter password', async function () {
  await fixture.loginPage.enterPwd();
});
// Then('click on keep me sign in',async function(){
//  await fixture.loginPage.uncheckClick();
// });
Then('again click on sign in button',async function() {
  await fixture.loginPage.clickonActulSignin();
})
