import express, { Express } from "express";
import passport from "passport";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import authRoute from "./routes/AuthRoute";
import secureRoute from "./routes/SecureRoute";
import passResetRoute from "./routes/PassResetRoute";
import "./config/Passport";
import { ErrorHandle } from "./middleware/ErrorHandle";

dotenv.config();
const app: Express = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB || "")
  .then(() => console.log("MongoDB Connected!"))
  .catch(() => console.log(`Couldn't Connect to DB!`));

//routes
app.use("/api/users", authRoute);
app.use(
  "/api/user",
  passport.authenticate("jwt", { session: false }),
  secureRoute
);
app.use("/api/password-reset", passResetRoute);

// error handler
app.use(ErrorHandle);

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
