import { IDependencies } from "@/application/interfaces/IDependencies";
import { getPutSignedUrl } from "@/infrastructure/services/s3Config";
import { Request, Response, NextFunction } from "express";

export const getSignedUrlController = (dependencies: IDependencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("User not athetnticated");
      }

      if (req.query && req.query.type && req.query.content) {
        const filePath = `upload/${req.user.email}/${
          req.query.type
        }/${Date.now()}.${req.query.content ? req.query.content : "jpg"}`;
        const contentType =
          req.query.content === "jpeg"
            ? "image/jpeg"
            : req.query.content === "mp4"
            ? "video/mp4"
            : req.query.content === "pdf"
            ? "application/pdf"
            : "video/mp4";

        const result = await getPutSignedUrl(filePath, contentType);

        res.status(200).json({
          success: true,
          data: { url: result, media: filePath },
          message: "URL fetched",
        });
      } else {
        const filePath = `upload/${req.user.email}/avatar/${
          req.user._id
        }${Date.now()}.jpg`;
        const contentType = "image/jpeg";

        const result = await getPutSignedUrl(filePath, contentType);

        res.status(200).json({
          success: true,
          data: { url: result, media: filePath },
          message: "URL fetched",
        });
      }
    } catch (error) {
      next(error);
    }
  };
};
