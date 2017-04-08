const fs = require('fs');
// 一次性读入到内存
// fs.readFile('note.md', function callback(err, data){
//   // 调用一次
//   console.log('one', data.length);
//   // 一次性卸乳
//   fs.writeFile('wnote.md', data);
// });

// 流的方式
let rs = fs.createReadStream('bigFile.txt');
rs.on('data', function(data){
  console.log('one', data.length);
});
let ws = fs.createWriteStream('wBigFile.txt');
rs.pipe(ws);