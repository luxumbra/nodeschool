'use strict'

const http = require('http')
const https = require('https');
const bl = require('bl')
//
// const url = process.argv[2]
const url = 'https://crafted.im'
//

const req = https.get(url, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.setEncoding('utf8')
  res.on('data', data => {
    console.log(data);
    process.stdout.write(data)
    res.pipe(bl((err, data) => {
      console.log(data.toString())

    }))
  })
  res.on('error', error => console.error('Shizer!! We have an error!', error))
  res.on('end', end => {
    console.log(end)
  })
})
// do this when there's an error
req.on('error', error => {
  // console.error('Shizer!! We have an error!', error)
  const { code, hostname } = error
  code == 'ENOTFOUND' ? console.log(`The resource ${hostname} was not found`) : null
})
req.end()
