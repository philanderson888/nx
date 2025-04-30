const http = require('http');

const PORT = 5001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world from node web server');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});