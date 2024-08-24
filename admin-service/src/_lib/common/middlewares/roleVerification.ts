import { Request, Response, NextFunction } from "express";
export const roleVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    if (req.user?.role !== "admin") {
      return res.sendStatus(401);
    }
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};
