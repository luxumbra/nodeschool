'use strict'

const fs = require('fs')
const path = require('path')
//
// console.log(process.argv);

// const dir = path.posix.basename('.')
const dir = process.argv[2]
// const ext = '.txt'
const ext = `.${process.argv[3]}`
// console.log(ext);

// My callback
function listFilteredFiles(err, list) {
  if (err) console.error('An error has occured, oooops!', err)
  const filtered = list.filter((file) => path.extname(file) === ext )
  filtered.map(file => console.log(`${file}`))
  // console.log(filtered)
}

fs.readdir(dir, 'utf8', listFilteredFiles)
