const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoDBSession = require('connect-mongodb-session')(session)
const multer = require('multer')
const dotenv = require('dotenv')
const ConnectDB = require('./db')
const userRouter = require('./routes/user.route')
const isAuth = require('./middleware/auth')


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

//db
ConnectDB();
const store = new MongoDBSession({
    uri: process.env.MONGODB,
    collection: "sessions"
})

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().array())
app.use(cookieParser());
app.use(session({
    secret: "Your secret key",
    resave: false,
    saveUninitialized: false,
    store: store
}));

//views
app.set('view engine', 'pug')
app.set('views', './views')

//default route
app.get('/', (req, res) => {
    const user = req.session.isAuth
    res.render('index', {user})
})

//route api
app.use(userRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

