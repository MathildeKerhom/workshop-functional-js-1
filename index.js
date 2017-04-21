const chalk = require('chalk');
const exercise1 = require('./src/exercise1');
const exercise2 = require('./src/exercise2');
// const exercise3 = require('./src/exercise3');
// const exercise4 = require('./src/exercise4');

const exercise0 = {
  run: () => {
    return chalk.red(`\nPlease replace ${chalk.red('exercise0')} by another one in index.js\n`);
  }
};


const exercise = exercise2;

//const input = [['a', 'b'], [1], [true, false, false]];
const input = ['033GKNORT', [0,0,1,1,2,2,4,7]];

console.log(chalk.yellow('RESULT', exercise.run(input)));