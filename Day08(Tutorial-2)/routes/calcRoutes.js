const express = require('express')
const router = express.Router()


router.get("/add/:num1/:num2", (req, res) => {
  const sum = req.params.num1 + req.params.num2
  res.send({sum: sum})
})


module.exports = router;