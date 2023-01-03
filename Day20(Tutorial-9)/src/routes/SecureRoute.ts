import express, { Request, Response, NextFunction, Router } from "express";

const router: Router = express.Router();

router.get("/profile", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.secret_token,
  });
});

export default router;
