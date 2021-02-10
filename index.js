const crypto = require('crypto')

const current_date = (new Date()).valueOf().toString();
const random = Math.random().toString();
console.log(crypto.createHash('sha1').update(current_date + random).digest('hex'));