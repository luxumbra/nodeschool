'use strict'

const mymodule = require('./mymodule')
//
// const dir = path.posix.basename('./test-files')
const dir = process.argv[2]
// const ext = '.txt'
const ext = process.argv[3]
// console.log(ext)

mymodule(dir, ext, function (err, list) {
  if(err) return console.error('Eeeeek! There\'s an error!', err)
  list.map(file => console.log(`${file}`)
  )
})
