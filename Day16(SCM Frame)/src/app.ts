import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: "secrect key",
        resave: false,
        saveUninitialized: false,
    })
);

//default route
app.get("/", (req: Request, res: Response) => {
    console.log(req.session);
    res.status(200).json({ message: "Default Route is OK" });
});

app.listen(PORT, () =>
    console.log(`server listening on http://localhost:${PORT}`)
);
