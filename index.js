const http = require('http');
const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');

const server = http.createServer((inRequest, inResponse) => {
  // Build file path
  let filePath = path.join(__dirname, 'public', 
    inRequest.url === '/'
    ? 'index.html'
    : inRequest.url 
  );
  // console.log(filePath)
  // inResponse.end();

  // Extension of the file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/jsoin';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read File
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code == 'ENONET') {
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
          inResponse.writeHead(404, { 'Content-Type': 'text/html' });
          inResponse.end(content, 'utf8');
        });
      }
    }
  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));