import { NextFunction, Request, Response } from "express";
import Token from "../models/Token";
import User from "../models/User";
import crypto from "crypto";
import { SendMail } from "../util/SendMail";
import { createError } from "../util/CreateError";

//Forgot Password
export const forgotPasswordService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: any = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User Not Found!"));
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
    res.status(200).json({ message: "Password reset link sent successfully!" });
  } catch (error) {
    next(createError(500, "Internal Server Error!"));
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
    if (!user) return next(createError(404, "User Not Found!"));

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return next(createError(404, "User Not Found!"));

    res.status(200).json({ message: "Valid URL" });
  } catch (error) {
    next(createError(500, "Internal Server Error!"));
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
    if (!user) return next(createError(404, "Email Not Found!"));
    const token: any = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return next(createError(404, "Token Not Found!"));

    user.password = req.body.password;
    await user.save();
    await token.remove();

    res.status(200).json({ message: "password reset successfully" });
  } catch (error) {
    next(createError(500, "Internal Server Error!"));
  }
};
