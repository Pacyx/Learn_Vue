let http = require('http');
let url = require('url');
let util =require('util');
let fs = require('fs');

let hostname = '127.0.0.1';
let port = 5050;

let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain:charset=utf-8');
//   requ
//  fs.readFile()
//   res.end('Hello World\n');
  res.end(util.inspect(url.parse(req.url)));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});