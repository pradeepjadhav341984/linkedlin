
import { expect, Locator, Page } from "@playwright/test";
import { TIMEOUT } from "node:dns";

export class LoginPage {

    private signin: Locator;
    private enterEmail: Locator;
    private enterPassword: Locator;
    private actualsignin: Locator;
    private keepmesignin: Locator

    //private continuelinkedlin:Locator;

    constructor(private page: Page) {

        this.signin = page.locator("a[href*='login']").first();
        this.enterEmail = page.locator('//input[@autocomplete="username webauthn"]');
        this.enterPassword = page.locator('(//input[@autocomplete="current-password"])[2]');
        this.actualsignin = page.locator('(//div//button[@type="button"]//span[text()="Sign in"])[2]');
        this.keepmesignin = page.locator('(//input[@type="checkbox"])[2]');
    }

    async navigate() {

        await this.page.goto(process.env.BASE_URL!);

        await this.page.waitForLoadState("load");

        await expect(this.signin).toBeVisible();
        console.log(" URL page succesfully open");
    }

    async clickOnSignin() {
        await this.page.waitForTimeout(2000);
        await this.signin.click();
        console.log("user successfully click on sign button");

    }
    async enterUserName() {
        await this.page.waitForTimeout(2000);
        await this.enterEmail.fill("pradeepjadhav3@gmail.com");
        console.log("user enter user name succesfully");

    }
    async enterPwd() {
        await this.page.waitForTimeout(2000);
        await expect(this.enterPassword).toBeVisible();
        await this.enterPassword.fill("Common@2026");
    }

    async clickonActulSignin() {
        //await this.page.waitForTimeout(2000);
        //await this.page.pause();
        await this.actualsignin.click();
        console.log("user click on actual sign in button succesfully");
        await this.page.waitForTimeout(5000);
    }

    async uncheckClick() {
        
        await this.page.waitForTimeout(2000);
        await this.keepmesignin.uncheck();
    }
    async verifyHomeURL() {

        await expect(this.page).toHaveURL("https://www.linkedin.com/feed/");
        console.log("user verify home url succesfully");

    }

}