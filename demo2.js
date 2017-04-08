// 流在网络中的实例
const http = require('http');
const fs = require('fs');
http.createServer(function(req, res){
  const rs = fs.createReadStream('note.md');
  rs.pipe(res);
  // res.write('hello');
  // res.end();
}).listen(3000);