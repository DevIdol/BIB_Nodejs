import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//route
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "TypeScript Testing OK" });
});

app.listen(PORT, () =>
    console.log(`server listening on http://localhost:${PORT}`))