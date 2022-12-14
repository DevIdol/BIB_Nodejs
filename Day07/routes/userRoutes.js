const express = require('express')
const { getAllUsers, createUser, getUser } = require("../controller/userController")
const router = express.Router();



router.get("/", getAllUsers)

router.post("/", createUser)

router.get("/:id", getUser)


module.exports = router;