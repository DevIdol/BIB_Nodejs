const fs = require('fs');

const server = require('http').createServer();

const PORT = 8000;

server.on('request', (req, res) => {
  fs.readFile('textFile.txt', 'utf-8', (err, data) => {
    err && console.log(err);
    res.end(data)
  })
})

server.listen(8000, 'localhost', () => {
  console.log(`Server running on port ${PORT}`)
})