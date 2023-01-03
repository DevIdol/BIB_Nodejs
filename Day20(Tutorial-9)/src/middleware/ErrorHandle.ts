import { NextFunction, Request, Response } from "express";

export const ErrorHandle = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500);
  res.json({ error: err });
};
