import express, { Router } from "express";
import passport from "passport";
import { login, signUp } from "../controllers/AuthController";

const router: Router = express.Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  signUp
);

router.post("/login", login);

export default router;
