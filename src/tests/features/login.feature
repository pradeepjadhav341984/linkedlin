@login
Feature: Login to linkedlin Application

Background: 
Given User navigates to the application
@smoke @login
Scenario: Verify the successful login for linkedlin application
When user click on sign button
When user should enter user name
And user should enter password 
#Then click on keep me sign in
Then again click on sign in button
Then verify home screen visible or not

