'use strict'

const fs = require('fs')
//
const file = './io-file.txt'
// const file = process.argv[2]
fs.readFile(file, 'utf8', finishedReading)

function finishedReading(err, contents) {
  if (err) console.log('There appears to be a problem', err)
  // console.log(contents)
  const lines = contents.split('\n').length - 1

  console.log(lines);
}
