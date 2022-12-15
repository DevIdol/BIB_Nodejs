const express = require('express')
const router = express.Router()


router.get("/sum/:num1/:num2", (req, res) => {
  const sum = parseInt(req.params.num1) + parseInt(req.params.num2)
  res.json({ Sum: `num1 + num2=> ${sum}` })
})



module.exports = router;