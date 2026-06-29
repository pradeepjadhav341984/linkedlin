import { chromium, firefox, webkit, Browser, Page } from '@playwright/test';

class BrowserManager {

    private static browser: Browser;
    private static page: Page;

    public static async launchBrowser(): Promise<Page> {

        const browserType = process.env.BROWSER || "chromium";
        const headless = process.env.HEADLESS === "true";

        switch (browserType.toLowerCase()) {

            case "firefox":
                this.browser = await firefox.launch({
                    headless: headless
                });
                break;

            case "webkit":
                this.browser = await webkit.launch({
                    headless: headless
                });
                break;

            default:
                this.browser = await chromium.launch({
                    headless: headless
                });
        }


        const context = await this.browser.newContext({
            viewport: {
                width: 1280,
                height: 720
            }
        });


        this.page = await context.newPage();

        return this.page;
    }


    public static getPage(): Page {
        return this.page;
    }


    public static async closeBrowser() {

        if (this.browser) {
            await this.browser.close();
        }

    }

}

export default BrowserManager;