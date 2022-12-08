const http = require("http")

const PORT =8000;

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plan"})
  res.write(`My server is running on port ${PORT}`)
  res.end();
}).listen(PORT)

console.log(`My server is running on port ${PORT}`)