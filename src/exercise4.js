const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 4 LOADED\n'));

var promiseNumbers = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 200, [100 , 100, 200, 300, 500])
})

var promiseStrings = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 2000, ['1' , 'un', '2', '3', 'cinq'])
})

const asyncYolo = (input) => {
  promiseNumbers.then(zip);
}

var getNumbers = (strings) => {
  return strings.map(str => parseInt(str));
}

var zip = (numbers) => {
  return _.zip(numbers, promiseStrings.then(getNumbers));
}

module.exports = {
  asyncYolo: asyncYolo,
  run: asyncYolo
}