const express = require("express");
const fs = require("fs");
var bodyParser = require('body-parser');
const users = require("./user.json")
const app = express();
const PORT = 8080;
app.use(bodyParser.json())

const data = {
  users,
  setUser: function (data) { this.users = data }
}
app.get('/users', (req, res) => {
  res.send(data.users)
})

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.send(newUser)
  data.setUser([...data.users, newUser])
  fs.writeFile(`user.json`, JSON.stringify(data.users), err => {
    err && console.log(err)
    console.log("New User Added")
  })
})

app.listen(PORT, () => console.log(`My server in running on ${PORT}`))