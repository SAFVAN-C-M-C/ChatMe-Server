import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const adminVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    if (req.user.role !== "admin") {
      return res.sendStatus(401);
    }

    next();
  } catch (err) {
    res.sendStatus(403);
  }
};
