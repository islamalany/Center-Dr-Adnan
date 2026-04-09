const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const DIR = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  // strip query strings
  url = url.split('?')[0];
  const filePath = path.join(DIR, url);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
    console.log(`  ${req.method} ${req.url}`);
  });
});

server.listen(PORT, () => {
  console.log('\n  Dr. Adnan Center — Local Dev Server');
  console.log('  =====================================');
  console.log(`  Homepage:   http://localhost:${PORT}/index.html`);
  console.log(`  Services:   http://localhost:${PORT}/services.html`);
  console.log(`  Book Appt:  http://localhost:${PORT}/book-appointment.html`);
  console.log('\n  Press Ctrl+C to stop\n');
});
