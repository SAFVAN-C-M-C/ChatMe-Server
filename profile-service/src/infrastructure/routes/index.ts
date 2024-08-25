import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
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
    deleteResumeFromProfile,
  } = controllers(dependencies);

  const router = Router();
  const route = (path: string) => {
    return router.route(path);
  };
  route("/").get(jwtMiddleware, getUserProfile);
  route("/apply-recruiter").post(jwtMiddleware, applyRecruiter);
  route("/apply-recruiter/accept").put(jwtMiddleware, acceptRecruiter);
  route("/apply-recruiter/ignore").put(jwtMiddleware, ignoreRecruiter);
  route("/avatar/upload").put(jwtMiddleware, updateAvatar);
  route("/bio/update").put(jwtMiddleware, updateBio);
  route("/update/about").put(jwtMiddleware, updateAbout);
  route("/update/resume/add").post(jwtMiddleware, addResumeToProfile);
  route("/update/resume/delete/:id").delete(
    jwtMiddleware,
    deleteResumeFromProfile
  );
  route("/update/education/add").post(jwtMiddleware, addEducation);
  route("/update/experience/add").post(jwtMiddleware, addExperience);
  route("/update/skills/add").post(jwtMiddleware, addSkills);
  route("/update/preferedJobs/add").post(jwtMiddleware, addPreferedJobs);
  route("/users/search").get(jwtMiddleware, getSearchedUser);
  route("/users/:userId").get(jwtMiddleware, getUserProfileById);
  route("/users/follow/:userId").put(jwtMiddleware, followUser);
  route("/users/unfollow/:userId").put(jwtMiddleware, unFollowUser);
  route("/get/user/:userId").get(jwtMiddleware, getUserDetailsByUserId);
  route("/theme").put(jwtMiddleware, changeTheam);
  route("/get/suggestions").get(jwtMiddleware, getUserSuggestions);
  route("/get/chart/user/data").get(
    jwtMiddleware,
    adminVerification,
    getDataForChart
  );

  return router;
};
