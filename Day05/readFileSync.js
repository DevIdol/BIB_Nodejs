const fs = require('fs');

const server = require('http').createServer();

const PORT = 8000;

server.on('request', (req, res) => {
  const data = fs.readFileSync('textFile.txt', 'utf-8');
  res.end(data)
})

server.listen(8000, 'localhost', () => {
  console.log(`Server running on port ${PORT}`)
})