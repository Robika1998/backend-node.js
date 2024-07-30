const path = require('path');

console.log('aertebs ertmanets',path.join(__dirname,'..', '..', '..'))
console.log('mivighot absoluturi gza', path.resolve('firts', 'second', 'absoluturi'))

const fullpath = path.resolve(__dirname,'firts', 'second', 'absoluturi.js')
console.log('parsingis gza', path.parse(fullpath))
console.log('gacalkeveba', path.sep)
console.log('shemowmeba absolutur gzis', path.isAbsolute('first/second'))
console.log('failis saxeli', path.basename(fullpath))



//-----------------------------------------

const siteUrl = 'http://localhost:8080/users?id=5123'

const url = new URL(siteUrl)

console.log(url)