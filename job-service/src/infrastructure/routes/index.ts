import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";
import { jwtMiddleware } from "@/_lib/common/middlewares/jwtMiddleware";
import { roleVerification } from "@/_lib/common/middlewares/roleVerification";


export const routes = (dependencies: IDependencies) => {
  const {
    createJob,getJobs,getJobDetails,deleteJob,editJob,serachJob,getJobsByUserId
  } = controllers(dependencies);

  const router = Router();

  router
    .route('/')
    .post(jwtMiddleware,roleVerification,createJob)
    .get(jwtMiddleware,getJobs)
  router
    .route('/search')
    .get(jwtMiddleware,serachJob)
  router
    .route('/get/:jobId')
    .get(jwtMiddleware,getJobDetails)
  router
    .route('/get/user/:userId')
    .get(jwtMiddleware,getJobsByUserId)
  router
    .route('/edit/:jobId')
    .post(jwtMiddleware,roleVerification,editJob)
  router
    .route('/delete/:jobId')
    .post(jwtMiddleware,roleVerification,deleteJob)

  return router;
};
