// MD5 HASH
const fs = require('fs');
const {
  Transform,
  Readable,
  Writable,
  Duplex
} = require('stream');
const crypto = require('crypto');

// MD5
let hashStream = crypto.createHash('md5'); // 作用：判断原始数据的完整性
console.log(hashStream instanceof Transform); // true
console.log(hashStream instanceof Readable); // true
console.log(hashStream instanceof Writable); // false
console.log(hashStream instanceof Duplex); // true

const rs = fs.createReadStream('note.md').pipe(hashStream).on('data', function(data){
  console.log(data.toString('hex'));
});
// .pipe(process.stdout);