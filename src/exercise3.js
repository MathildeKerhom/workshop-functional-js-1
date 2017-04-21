const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 3 LOADED\n'));

const reverseString = (input, reversedString) => {
  if (input.length <= 0) { 
    return '';
  } else {
    return reverseString(input.substring(1)) + input.charAt(0);
  }
}

module.exports = {
  reverseString: reverseString,
  run: reverseString
}