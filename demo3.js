const zlib = require('zlib');
const fs = require('fs');
// rs - readable stream
const rs = fs.createReadStream('bigFile.txt');

// ws
const ws = fs.createWriteStream('gzipFile.gzip');

// gzip - readable / writable - duplex stream
const gzip = zlib.createGzip();

rs.pipe(gzip).pipe(ws);