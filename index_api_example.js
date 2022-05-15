const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((inRequest, inResponse) => {
  if (inRequest.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
      if (error) throw error;
      inResponse.writeHead(200, { 'Content-Type': 'text/html' });
      inResponse.end(content);
    });
  }

  if (inRequest.url === '/api/users') {
    const users = [
      { name: "Bob Smith", age: 40 },
      { name: "John Doe", age: 30 }
    ];
    inResponse.writeHead(200, { 'Content-Type': 'application/json' });
    inResponse.end(JSON.stringify(users));
  }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));