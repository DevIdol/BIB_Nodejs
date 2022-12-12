const fs = require('fs');

const server = require('http').createServer();

const PORT = 8000;

server.on('request', (req, res) => {
  const data = fs.createReadStream('textFile.txt', 'utf-8');
  data.pipe(res);
})

server.listen(8000, 'localhost', () => {
  console.log(`Server running on port ${PORT}`)
})