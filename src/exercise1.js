const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (input) => {
  if(input.length == 0) {
    return [];
  } else {
    return input[0].map(function(_,i){
        return input.map(array => array[i]);
    });
  }
}

module.exports = {
  zip: zip,
  run: zip
}