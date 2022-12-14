const express = require('express')
const users = require('../user.json')
const router = express.Router();

const data = {
  users,
  setUser: function (data) {this.users = data}
}

router.get("/", (req, res) => {
  res.send(data.users)
})


module.exports = router;