'use strict';

const theArgs = [];
theArgs.push(...process.argv);

const theTotal = theArgs
                  .filter(number => Number(number))
                  .reduce((a, b) => +a + +b);

console.log(`${theTotal}`);
