import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
import { upload } from "@/_lib/middlewares/multer";

export const routes = (dependencies: IDependencies) => {
  const {
    getUserProfile,
    applyRecruiter,
    updateAvatar,
    updateBio,
    updateAbout,
    addEducation,
    addExperience,
    addSkills,
    addPreferedJobs,
    acceptRecruiter,
    ignoreRecruiter
  } = controllers(dependencies);

  const router = Router();

  router.route("/").get(jwtMiddleware, getUserProfile);
  router.route("/apply-recruiter").post(jwtMiddleware, applyRecruiter);
  router.route("/apply-recruiter/accept").post(jwtMiddleware, acceptRecruiter);
  router.route("/apply-recruiter/ignore").post(jwtMiddleware, ignoreRecruiter);
  router.route("/avatar/upload").put(jwtMiddleware, updateAvatar);
  router.route("/bio/update").post(jwtMiddleware, updateBio);
  router.route("/update/about").post(jwtMiddleware, updateAbout);
  router.route("/update/education/add").post(jwtMiddleware, addEducation);
  router.route("/update/experience/add").post(jwtMiddleware, addExperience);
  router.route("/update/skills/add").post(jwtMiddleware, addSkills);
  router.route("/update/preferedJobs/add").post(jwtMiddleware, addPreferedJobs);

  return router;
};
