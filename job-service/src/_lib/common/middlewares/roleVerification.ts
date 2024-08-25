import { Request, Response, NextFunction } from "express";
export const roleVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    if (req.user?.type !== "recruiter" && req.user?.type !== "company") {
      return res.sendStatus(401);
    }
    next();
  } catch (err) {
    res.sendStatus(403);
  }
};
