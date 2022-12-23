const express = require('express')
const isAuth = require('../middleware/auth')
const { login, register, logout } = require('../controllers/user.controller')
const router = express.Router()


//login
router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/login', login)

//register
router.get('/register', (req, res) => {
    res.render('register')
})
router.post('/register', register)

//dashboard
router.get('/dashboard', isAuth, (req, res) => {
    res.render('dashboard')
})

//logout
router.post('/logout', logout)

module.exports = router;