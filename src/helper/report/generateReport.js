const reporter = require("cucumber-html-reporter");

const options = {

    theme: "bootstrap",

    jsonFile: "reports/cucumber-report.json",

    output: "reports/cucumber-html-report.html",

    reportSuiteAsScenarios: true,

    launchReport: true,

    metadata: {

        "Application": "LinkedIn",

        "Browser": "Chromium",

        "Platform": "Windows",

        "Framework": "Playwright + Cucumber",

        "Executed By": "Pradeep Jadhav"

    }

};

reporter.generate(options);