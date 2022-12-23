const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const dotenv = require('dotenv')
const ConnectDB = require('./db')


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().array())
app.use(cookieParser());
app.use(session({
    secret: "Your secret key",
    resave: false,
    saveUninitialized: false
}));

//db
ConnectDB();

app.get('/', (req, res) => {
    req.session.isAuth = true
    console.log(req.session)
    res.status(200).json({
        message: "Default Route is OK"
    })
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

