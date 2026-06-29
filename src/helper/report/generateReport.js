 const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");


report.generate({

    jsonDir: "test-results",

    reportPath: "test-results/html-report",


    metadata: {

        browser: {
            name: "chrome",
            version: "latest"
        },

        device: "Local Machine",

        platform: {
            name: "windows",
            version: "11"
        }

    },


    customData: {

        title: "Automation Test Execution Report",

        data: [

            {
                label: "Project",
                value: "Playwright Cucumber Framework"
            },

            {
                label: "Environment",
                value: process.env.ENV || "dev"
            },

            {
                label: "Execution Date",
                value: new Date().toLocaleString()
            }

        ]

    },



    customStyle: "src/reports/custom.css"

});