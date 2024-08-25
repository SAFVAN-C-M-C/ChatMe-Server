import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";
import { jwtMiddleware } from "@/_lib/common/middlewares/jwtMiddleware";
import { roleVerification } from "@/_lib/common/middlewares/roleVerification";
import { adminVerification } from "@/_lib/common/middlewares/adminVerification";

export const routes = (dependencies: IDependencies) => {
  const {
    createJob,
    getJobs,
    getJobDetails,
    deleteJob,
    editJob,
    serachJob,
    getJobsByUserId,
    getJobChartData,
    applyForJob,
    getJobApplications,
    updateApplicationStatus,
    getMyJobApplications,
  } = controllers(dependencies);

  const router = Router();

  router
    .route("/")
    .post(jwtMiddleware, roleVerification, createJob)
    .get(jwtMiddleware, getJobs);
  router.route("/search").get(jwtMiddleware, serachJob);
  router.route("/get/:jobId").get(jwtMiddleware, getJobDetails);
  router.route("/get/user/:userId").get(jwtMiddleware, getJobsByUserId);
  router.route("/edit/:jobId").post(jwtMiddleware, roleVerification, editJob);
  router
    .route("/delete/:jobId")
    .delete(jwtMiddleware, roleVerification, deleteJob);
  router
    .route("/get/chart/job/data")
    .get(jwtMiddleware, adminVerification, getJobChartData);
  router.route("/apply/job").post(jwtMiddleware, applyForJob);
  router
    .route("/applications/:jobId")
    .get(jwtMiddleware, roleVerification, getJobApplications);
  router.route("/myapplications").get(jwtMiddleware, getMyJobApplications);
  router
    .route("/applications/update/:applicationId")
    .put(jwtMiddleware, roleVerification, updateApplicationStatus);
  return router;
};
