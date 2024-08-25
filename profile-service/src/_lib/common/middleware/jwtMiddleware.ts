import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  _id: string;
  email: string;
  role: string;
  type: string;
  loggined: boolean;
  isEmailVerified?: boolean;
  isDetailsComplete?: boolean;
  reset?: false;
  otp?: true;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

export const jwtMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const token =
    req.cookies.access_token || req.headers.authorization?.split(" ")[1] || "";
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as UserPayload;

    req.user = decoded;
    // console.log(req.body,req.path);

    next();
  } catch (err) {
    res.sendStatus(403);
  }
};
