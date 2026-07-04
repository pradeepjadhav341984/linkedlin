import * as dotenv from "dotenv";

dotenv.config({
    path: "./src/helper/env/.env.dev"
});
import {
    Before,
    After,
    BeforeAll,
    AfterAll,
    Status,
    setDefaultTimeout
} from "@cucumber/cucumber";

import {
    Browser,
    chromium
} from "@playwright/test";

import { fixture } from "./pageFixture";
import { LoginPage } from "../pages/loginPage";

setDefaultTimeout(60 * 1000);

let browser: Browser;

// Runs once before all scenarios
BeforeAll(async function () {

    browser = await chromium.launch({

        headless: false,

        args: [
            "--start-maximized"
        ]

    });

});

// Runs before every scenario
Before(async function () {

    fixture.page = await browser.newPage({

        viewport: null

    });

    fixture.loginPage = new LoginPage(fixture.page);

});

// Runs after every scenario
After(async function (scenario) {

    if (scenario.result?.status === Status.FAILED) {

        const screenshot = await fixture.page.screenshot({

            path: `reports/screenshots/${Date.now()}.png`,

            fullPage: true

        });

        await this.attach(screenshot, "image/png");

    }

    await fixture.page.close();

});


// Runs once after all scenarios
AfterAll(async function () {

    await browser.close();

});