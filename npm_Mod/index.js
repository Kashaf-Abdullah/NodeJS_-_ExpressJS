const chalk = require("chalk")
const validator=require("validator")
console.log(chalk.blue('hello'))

const res=validator.isEmail("kashaf@gmail.com")
console.log(res);


console.log(res?chalk.green.inverse(res):chalk.pink.inverse(res))