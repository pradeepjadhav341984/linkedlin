import {
    Before,
    After,
    BeforeAll,
    AfterAll,
    Status
} from "@cucumber/cucumber";

import {
    chromium,
    Browser,
    Page
} from "@playwright/test";

import * as fs from "fs";


let browser: Browser;
export let page: Page;


// Runs once before all scenarios
BeforeAll(async () => {

    browser = await chromium.launch({

        headless: false

    });

});


// Runs before every scenario
Before(async function () {


    page = await browser.newPage();


    await page.setViewportSize({

        width: 1280,

        height: 720

    });


});


// Runs after every scenario
After(async function (scenario) {


    if (scenario.result?.status === Status.FAILED) {


        const screenshot = await page.screenshot({

            path:
            `reports/screenshots/${Date.now()}.png`,

            fullPage:true

        });


        await this.attach(

            screenshot,

            "image/png"

        );


    }


    await page.close();


});


// Runs once after all scenarios
AfterAll(async () => {


    await browser.close();


});