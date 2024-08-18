import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
import { upload } from "@/_lib/middlewares/multer";
import { adminVerification } from "@/_lib/common/middleware/adminVerification";

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
    ignoreRecruiter,
    getSearchedUser,
    getUserProfileById,
    followUser,
    unFollowUser,
    getUserDetailsByUserId,
    changeTheam,
    getDataForChart,
    getUserSuggestions,
    addResumeToProfile,
    deleteResumeFromProfile
  } = controllers(dependencies);

  const router = Router();

  router.route("/").get(jwtMiddleware, getUserProfile);
  router.route("/apply-recruiter").post(jwtMiddleware, applyRecruiter);
  router.route("/apply-recruiter/accept").post(jwtMiddleware, acceptRecruiter);
  router.route("/apply-recruiter/ignore").post(jwtMiddleware, ignoreRecruiter);
  router.route("/avatar/upload").put(jwtMiddleware, updateAvatar);
  router.route("/bio/update").post(jwtMiddleware, updateBio);
  router.route("/update/about").post(jwtMiddleware, updateAbout);
  router.route("/update/resume/add").post(jwtMiddleware, addResumeToProfile);
  router.route("/update/resume/delete/:id").delete(jwtMiddleware, deleteResumeFromProfile);
  router.route("/update/education/add").post(jwtMiddleware, addEducation);
  router.route("/update/experience/add").post(jwtMiddleware, addExperience);
  router.route("/update/skills/add").post(jwtMiddleware, addSkills);
  router.route("/update/preferedJobs/add").post(jwtMiddleware, addPreferedJobs);
  router.route("/users/search").get(jwtMiddleware, getSearchedUser);
  router.route("/users/:userId").get(jwtMiddleware, getUserProfileById);
  router.route("/users/follow/:userId").put(jwtMiddleware, followUser);
  router.route("/users/unfollow/:userId").put(jwtMiddleware, unFollowUser);
  router.route("/get/user/:userId").get(jwtMiddleware, getUserDetailsByUserId);
  router.route("/theam").post(jwtMiddleware, changeTheam);
  router.route("/get/suggestions").get(jwtMiddleware, getUserSuggestions);
  router.route("/get/chart/user/data").get(jwtMiddleware,adminVerification, getDataForChart);
  
  return router;
};
