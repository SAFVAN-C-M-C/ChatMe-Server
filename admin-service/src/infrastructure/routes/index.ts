import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware, roleVerification } from "@/_lib/common/middlewares";
import { verify } from "jsonwebtoken";

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
  //routes
  router.route("/").get((req, res, next) => {
    console.log("hello");

    res.json({ message: "hello there" });
  });


  //get all the users
  router.route("/users").get(jwtMiddleware, roleVerification, getUsers);

  //get all the compnanies
  router.route("/companies").get(jwtMiddleware, roleVerification, getCompanies);

  // get all the company verification request
  router
    .route("/companies/requests")
    .get(jwtMiddleware, roleVerification, getCompanyRequest);

  // get all the recruiter verifcation request
  router
    .route("/recruiter/requests")
    .get(jwtMiddleware, roleVerification, getRecruiterRequest);

  // verify company request
  router
    .route("/companies/requests/verify")
    .post(jwtMiddleware, roleVerification, verifyRequest);

  // verify recruiter request
  router
    .route("/recruiter/requests/verify")
    .post(jwtMiddleware, roleVerification, verifyRequest);

  //block company
  router
    .route("/company/block")
    .post(jwtMiddleware, roleVerification, blockUser);

  //unblock company
  router
    .route("/company/unblock")
    .post(jwtMiddleware, roleVerification, unBlockUser);

  //block user
  router.route("/user/block").post(jwtMiddleware, roleVerification, blockUser);

  //unblock user
  router
    .route("/user/unblock")
    .post(jwtMiddleware, roleVerification, unBlockUser);

  //get all the reports and add reports
  router
    .route("/report")
    .post(jwtMiddleware, addReport)
    .get(jwtMiddleware, roleVerification, getReports);

  //admin report actions
  router
    .route("/report/action")
    .put(jwtMiddleware, roleVerification, reportAction);

  //delete a report
  router
    .route("/report/delete/:id")
    .put(jwtMiddleware, roleVerification, deleteReport);

  return router;
};
