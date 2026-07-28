
import { expect, ElementHandle, Locator, Page } from "@playwright/test";
import { TIMEOUT } from "node:dns";

export class LoginPage {

    private signin: Locator;
    private enterEmail: Locator;
    private enterPassword: Locator;
    private actualsignin: Locator;
    private keepmesignin: Locator

    //private continuelinkedlin:Locator;

    constructor(private page: Page) {

        this.signin = page.locator("a[href*='login'], a:has-text('Sign in'), button:has-text('Sign in')").first();
        this.enterEmail = page.locator('input[name="session_key"], input[id="username"], input[autocomplete="username"], input[placeholder*="Email"], input[placeholder*="email"]').first();
        this.enterPassword = page.locator('input[name="session_password"], input[autocomplete="current-password"], input[placeholder*="Password"], input[placeholder*="password"]').first();
        this.actualsignin = page.locator('button[type="submit"], button:has-text("Sign in"), button[aria-label*="Sign in"]').first();
        this.keepmesignin = page.locator('input[type="checkbox"][name*="remember"], input[type="checkbox"]');
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
        if (await this.enterEmail.count() === 0) {
            throw new Error('Email input was not found');
        }
        await this.fillLocatorValue(this.enterEmail, "pradeepjadhav3@gmail.com");
        console.log("user enter user name succesfully");

    }
    async enterPwd() {
        await this.page.waitForTimeout(2000);
        if (await this.enterPassword.count() === 0) {
            throw new Error('Password input was not found');
        }
        await this.fillLocatorValue(this.enterPassword, "Common@2026");
    }

    private async fillLocatorValue(locator: Locator, value: string) {
        const count = await locator.count();
        if (count === 0) throw new Error('Locator has no elements');
        const loc = locator.first();
        try {
            await loc.fill(value, { timeout: 3000 });
            return;
        } catch (err) {
            // fallback to elementHandles and evaluate when element is not visible
            const handles = await locator.elementHandles();
            if (!handles || handles.length === 0) throw err;
            for (const handle of handles) {
                const visible = await handle.evaluate((el: HTMLElement) => {
                    const style = window.getComputedStyle(el);
                    return style.visibility !== 'hidden' && style.display !== 'none' && parseFloat(style.opacity || '1') > 0 && (el.offsetWidth > 0 || el.offsetHeight > 0);
                });
                if (visible) {
                    await handle.focus();
                    await handle.evaluate((el: any, val: string) => { el.value = val; el.dispatchEvent(new Event('input', { bubbles: true })); }, value);
                    return;
                }
            }
            // if none visible, set the value on the first handle anyway
            const first = handles[0];
            await first.evaluate((el: any, val: string) => { el.value = val; el.dispatchEvent(new Event('input', { bubbles: true })); }, value);
        }
    }

    private async getFirstVisibleHandle(locator: Locator): Promise<ElementHandle<HTMLElement> | null> {
        const handles = await locator.elementHandles();
        for (const handle of handles) {
            const isVisible = await handle.evaluate((el: HTMLElement) => {
                const style = window.getComputedStyle(el);
                return style.visibility !== 'hidden' && style.display !== 'none' && parseFloat(style.opacity) > 0 && el.offsetWidth > 0 && el.offsetHeight > 0;
            });
            if (isVisible) {
                return handle as ElementHandle<HTMLElement>;
            }
        }
        return null;
    }

    async clickonActulSignin() {
        //await this.page.waitForTimeout(2000);
        //await this.page.pause();
        await expect(this.actualsignin).toBeVisible({
timeout: 15000
});
        await this.actualsignin.click();
        console.log("user click on actual sign in button succesfully");
        await this.page.waitForTimeout(2000);
    }

    async uncheckClick() {
        
        await this.page.waitForTimeout(2000);
        await this.keepmesignin.uncheck();
    }
    
}