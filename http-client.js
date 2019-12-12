'use strict'

const http = require('http')
// const https = require('https');
//
const url = process.argv[2]
// const url = 'http://crafted.im'
//

http.get(url, (res) => {
  res.setEncoding('utf8')
  res.on('data', data => {
    console.log(data);
  })
  res.on('error', error => console.error('Shizer!! We have an error!', error))
}).on('error', error => {
  // console.error('Shizer!! We have an error!', error)
  const { code, hostname } = error
  code == 'ENOTFOUND' ? console.log(`The resource ${hostname} was not found`) : null
})
