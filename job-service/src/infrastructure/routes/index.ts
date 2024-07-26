import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";
import { jwtMiddleware } from "@/_lib/common/middlewares/jwtMiddleware";
import { roleVerification } from "@/_lib/common/middlewares/roleVerification";


export const routes = (dependencies: IDependencies) => {
  const {
    createJob,getJobs,getJobDetails
  } = controllers(dependencies);

  const router = Router();

  router
    .route('/')
    .post(jwtMiddleware,roleVerification,createJob)
    .get(jwtMiddleware,getJobs)
  router
    .route('/:jobId')
    .get(jwtMiddleware,getJobDetails)

  return router;
};
