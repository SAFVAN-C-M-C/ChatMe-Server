import { Request, Response, NextFunction } from "express";
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(err.status || 404).json({
    success: false,
    status: err.status,
    message: err.message,
  });
};

export default errorHandler;
