import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import dotenv from "dotenv";
import { loginService } from "../services/AuthService";
dotenv.config();

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({
    message: "Signup successful",
    user: req.user,
  });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  loginService(req, res, next);
};
