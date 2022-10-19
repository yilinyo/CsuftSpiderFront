const SM4 = require('gm-crypt').sm4

let sm4Config = {
  // encrypt/decypt main key; cannot be omitted
  key: '1234567890123456',

  // optional; can be 'cbc' or 'ecb'
  mode: 'ecb', // default

  // optional; when use cbc mode, it's necessary
  iv: 'UISwD9fW6cFh9SNS', // default is null

  // optional: this is the cipher data's type; Can be 'base64' or 'text'
  cipherType: 'base64' // default is base64
}

let sm4 = new SM4(sm4Config)


module.exports = sm4