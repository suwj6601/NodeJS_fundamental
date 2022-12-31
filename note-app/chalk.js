const validator = require("validator");
const chalk = require("chalk");

console.log(validator.isEmail("tranvansu@gmail.com"));

const Msg = chalk.blue.bgRed.bold("Success!");
console.log(Msg);
