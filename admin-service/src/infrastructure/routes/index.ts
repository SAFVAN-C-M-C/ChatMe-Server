import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware, roleVerification } from "@/_lib/common/middlewares";

export const routes = (dependencies: IDependencies) => {
  const {
    getUsers,
    getCompanies,
    getCompanyRequest,
    getRecruiterRequest,
    verifyRequest,
    blockUser,
    unBlockUser,
    addReport,
    getReports,
    reportAction,
    deleteReport,
  } = controllers(dependencies);
  const router = Router();
  const routerUtil = (path: string) => {
    return router.route(path);
  };
  
  //get all the users
  routerUtil("/users").get(jwtMiddleware, roleVerification, getUsers);

  //get all the compnanies
  routerUtil("/companies").get(jwtMiddleware, roleVerification, getCompanies);

  // get all the company verification request
  routerUtil("/companies/requests").get(
    jwtMiddleware,
    roleVerification,
    getCompanyRequest
  );

  // get all the recruiter verifcation request
  routerUtil("/recruiter/requests").get(
    jwtMiddleware,
    roleVerification,
    getRecruiterRequest
  );

  // verify company request
  routerUtil("/companies/requests/verify").put(
    jwtMiddleware,
    roleVerification,
    verifyRequest
  );

  // verify recruiter request
  routerUtil("/recruiter/requests/verify").put(
    jwtMiddleware,
    roleVerification,
    verifyRequest
  );

  //block company
  routerUtil("/company/block").put(jwtMiddleware, roleVerification, blockUser);

  //unblock company
  routerUtil("/company/unblock").put(
    jwtMiddleware,
    roleVerification,
    unBlockUser
  );

  //block user
  routerUtil("/user/block").put(jwtMiddleware, roleVerification, blockUser);

  //unblock user
  routerUtil("/user/unblock").put(jwtMiddleware, roleVerification, unBlockUser);

  //get all the reports and add reports
  routerUtil("/report")
    .post(jwtMiddleware, addReport)
    .get(jwtMiddleware, roleVerification, getReports);

  //admin report actions
  routerUtil("/report/action").put(
    jwtMiddleware,
    roleVerification,
    reportAction
  );

  //delete a report
  routerUtil("/report/delete/:id").delete(
    jwtMiddleware,
    roleVerification,
    deleteReport
  );

  return router;
};
