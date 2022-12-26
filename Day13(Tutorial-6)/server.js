import express, { application } from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


//default route 
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Default Route is OK!"
    })
})


app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))
