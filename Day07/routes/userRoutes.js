const express = require('express')
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');
const users = require('../user.json')
const router = express.Router();

const data = {
  users,
  setUser: function (data) { this.users = data }
}

router.get("/", (req, res) => {
  res.send(data.users)
})

router.post("/", (req, res) => {
  const newUser = {...req.body, id: uuidv4()};
  res.send(newUser)
  data.setUser([...data.users, newUser])
  fs.writeFile('user.json', JSON.stringify(data.users), err => {
    err && console.log(err);
    console.log("New User Added")
  })
})


module.exports = router;