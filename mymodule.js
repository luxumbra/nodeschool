'use strict'

const fs = require('fs');
const path = require('path')
//

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, 'utf8', function(err, list) {
    if(err) return callback(err)

    list = list.filter((file) => path.extname(file) === `.${ext}`)
    callback(null, list)
  })
}
