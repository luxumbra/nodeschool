'use strict';

// import the `fs` module for working with the file system
const fs = require('fs');
//
// MY WAY - not great
// const file = `./io-file.txt`;
// const file = process.argv[2];
// // console.log('File: ', file);

// // Read the file and return a `Buffer` object that contains the contents of the file.
// const fileBuffer = fs.readFileSync(file);
// const fileContents = fileBuffer.toString();
// // console.log(fileContents);

// const lines = fileContents.split('\n');
// // console.log(lines);

// // console.log(lines.length);
// const eofLine = lines.slice(-1);

// let lineCount = 0;

// // console.log(eofLine);

// if (eofLine) {
//   lineCount = lines.length - 1;
//   // console.log(lineCount);

//   // return lineCount;
// } else {
//   lineCount = lines.length;

// }

// console.log(lineCount);

// A better way = Good
// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1

// This can be shortened to, which is so simple!
const lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length -1

console.log(lines);
