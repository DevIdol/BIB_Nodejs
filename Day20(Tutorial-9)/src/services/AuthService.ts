import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import dotenv from "dotenv";
import { createError } from "../util/CreateError";
dotenv.config();

export const loginService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) return next(createError(400, "Invalid Email or Password!"));
      req.login(user, { session: false }, async (error) => {
        if (error) return next(createError(400, "Invalid Email or Password!"));
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign(
          { user: body },
          String(process.env.JWTSECRET_KEY),
          {
            expiresIn: "1d",
          }
        );

        return res.json({ token });
      });
    } catch (error: any) {
      return next(createError(500, "Internal Server Error!"));
    }
  })(req, res, next);
};
