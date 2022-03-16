const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  let filename = '';

  switch (q.pathname) {
    case '/about':
      filename = 'about.html';
      break;
    case '/':
      filename = 'index.html';
      break;
    case '/contact-me':
      filename = 'contact-me.html';
      break;
    case '/main.css':
      filename = 'main.css';
      break;
    default:
      filename = '404.html';
  }

  fs.readFile(filename, (err, data) => {
    if (filename.match(/.css$/i)) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
    } else if (filename.match(/.html$/i)) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
    }
    res.write(data);
    return res.end();
  });
});

server.listen(8080, () => {
  console.log('connected');
});
