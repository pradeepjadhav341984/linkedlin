module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "src/tests/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    paths: [
      "src/tests/features/**/*.feature"
    ],
    format: [
      "progress"
    ]
  }
};