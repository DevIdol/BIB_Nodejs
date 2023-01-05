import express from "express";
import {
  forgotPassword,
  passwordVerifyURL,
  resetPassword,
} from "../controllers/PassResetController";
const router = express.Router();

//Forgot Password
router.post("/", forgotPassword);

//Password Verify URL
router.get("/:id/:token", passwordVerifyURL);

//Reset Password
router.post("/:id/:token", resetPassword);

export default router;
