import passport from "passport";
import passportJWT from "passport-jwt";
import passportLocal from "passport-local";
import dotenv from "dotenv";
import User from "../models/User";
import { createError } from "../util/CreateError";

dotenv.config();
const localStrategy = passportLocal.Strategy;
const JWTstrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

//signup
passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email: any, password: any, done: any) => {
      try {
        const user = await User.create({
          email,
          password,
        });

        return done(null, user);
      } catch (error: any) {
        done(createError(500, "Internal Server Error"));
      }
    }
  )
);

// login
passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email: any, password: any, done: any) => {
      try {
        const user: any = await User.findOne({ email });

        if (!user) {
          return done(null, false, createError(404, "User Not Found!"));
        }
        const validate = await user.isValidPassword(password);
        if (!validate) {
          return done(null, false, createError(400, "Invalid Password"));
        }

        return done(null, user, { message: "Logged in Successfully" });
      } catch (error: any) {
        done(createError(500, error));
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.JWTSECRET_KEY,
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error: any) {
        done(createError(500, error));
      }
    }
  )
);
