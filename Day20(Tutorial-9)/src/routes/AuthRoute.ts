import express, { Request, Response, NextFunction, Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router: Router = express.Router();

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("login", async (err, user, info) => {
      try {
        if (err || !user) {
          const error = new Error("An error occurred.");

          return next(error);
        }

        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);
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
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  }
);

export default router;
