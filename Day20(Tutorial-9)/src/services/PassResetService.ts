import { NextFunction, Request, Response } from "express";
import Token from "../models/Token";
import User from "../models/User";
import crypto from "crypto";
import { SendMail } from "../util/SendMail";


//Forgot Password
export const forgotPasswordService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = await User.findOne({ email: req.body.email });
    !user && new Error("Email not Found!");

    let token = await Token.findOne({
      userId: user._id,
    });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }
    const url = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await SendMail(user.email, "Password Reset", url);
    res.status(200).send({ message: "Password reset link sent successfully!" });
  } catch (error) {
    next(error);
  }
};

// Password  Verify Url
export const passwordVerifyURLService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = await User.findOne({ _id: req.params.id });
    !user && new Error("Email not Found!");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    !token && new Error("Token not Found!");

    res.status(200).send({ message: "Valid URL" });
  } catch (error) {
    next(error);
  }
};

//Password Reset
export const resetPasswordService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = await User.findOne({ _id: req.params.id });
    !user && new Error("Email not Found!");
    const token: any = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    !token && new Error("Invalid Token!");

    user.password = req.body.password;
    await user.save();
    await token.remove();

    res.status(200).json({ message: "password reset successfully" });
  } catch (error) {
    next(error);
  }
};
