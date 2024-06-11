import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
import multer from "multer";
import { upload } from "@/_lib/middlewares/multer";





export const routes = (dependencies: IDependencies) => {
  const { getUserProfile,applyRecruiter,updateAvatar,updateBio,updateAbout } =
    controllers(dependencies);

  const router = Router();

  router.route("/").get(jwtMiddleware,getUserProfile);
  router.route("/apply-recruiter").post(jwtMiddleware,applyRecruiter);
  router.route("/avatar/upload").post(jwtMiddleware,upload.single("avatar"),updateAvatar);
  router.route("/bio/update").post(jwtMiddleware,updateBio);
  router.route("/update/about").post(jwtMiddleware,updateAbout);
  

  return router;
};
