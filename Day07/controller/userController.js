const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const users = require("../user.json");

const data = {
  users,
  setUser: function (data) {
    this.users = data;
  },
};
module.exports.getAllUsers = (req, res) => {
  res.send(data.users);
};

module.exports.createUser = (req, res) => {
  const newUser = { ...req.body, id: uuidv4() };
  res.send(newUser);
  data.setUser([...data.users, newUser]);
  fs.writeFile("user.json", JSON.stringify(data.users), (err) => {
    err && console.log(err);
    console.log("New User Added");
  });
};

module.exports.getUser = (req, res) => {
  const { id } = req.params;
  const user = data.users.find((user) => user.id == id);
  res.send(user);
};
