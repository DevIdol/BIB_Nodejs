const User = require('../models/user.model')
const bcrypt = require('bcrypt')

//register
module.exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username })
        user && res.redirect('/register')
        const hashedPass = await bcrypt.hash(password, 12);
        user = new User({
            username,
            password: hashedPass
        })
        await user.save();
        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
}

//login
module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        let user = await User.findOne({ username })
        !user && res.redirect('/login')
        const isValidatePass = await bcrypt.compare(password, user.password)
        !isValidatePass && res.redirect('/login')
        req.session.isAuth = true
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

//logout
module.exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/login");
    });
}