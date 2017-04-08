const zlib = require('zlib');
const fs = require('fs');
const http  = require('http');


http.createServer(function handle(req, res){
  // rs - readable stream
  const rs = fs.createReadStream('bigFile.txt');
  res.setHeader('Content-Encoding', 'gzip');
  // gzip - readable / writable - duplex stream
  const gzip = zlib.createGzip();
  rs.pipe(gzip).pipe(res);
}).listen(3000);

