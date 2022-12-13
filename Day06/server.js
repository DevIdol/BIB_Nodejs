const express = require("express");
const fs = require("fs");
var bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
app.use(bodyParser.json())
app.get('/get-users', (req, res) => {
  fs.readFile('user.json', (err, data) => {
    res.send(JSON.parse(data))
  })
})

app.post('/post-users', (req, res) => {
  const newUser = req.body;
  fs.readFile('user.json', (err, data) => {
    err && console.log(err)
    var user = JSON.parse(data)
    user.push(newUser)
    res.send(newUser)
    fs.writeFile("user.json", JSON.stringify(user), err => {
      err && console.log(err)
      console.log("User Updated Successfully!")
    })
  })
})

app.listen(PORT, () => console.log(`My server in running on ${PORT}`))