module.exports = {

default: {

requireModule:[
"ts-node/register"
],

require:[
"step-definitions/**/*.ts",
"hooks/**/*.ts"
],

format:[

"progress",

"html:reports/cucumber-report.html"

],

paths:[

"features/**/*.feature"

]

}

}