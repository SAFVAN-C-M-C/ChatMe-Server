import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware,roleVerification } from "@/_lib/common/middlewares";






export const routes = (dependencies: IDependencies) => {
  const { getUsers,getCompanies ,getCompanyRequest,getRecruiterRequest,verifyRequest,blockUser,unBlockUser,addReport,getReports,reportAction,deleteReport} =
    controllers(dependencies);

  const router = Router();

  router.route("/").get((req,res,next)=>{
    console.log("hello");
    
    res.json({message:"hello there"})
  });
  router.route("/users").get(jwtMiddleware,roleVerification,getUsers);
  router.route("/companies").get(jwtMiddleware,roleVerification,getCompanies);
  router.route("/companies/requests").get(jwtMiddleware,roleVerification,getCompanyRequest);
  router.route("/recruiter/requests").get(jwtMiddleware,roleVerification,getRecruiterRequest);
  router.route("/companies/requests/verify").post(jwtMiddleware,roleVerification,verifyRequest);
  router.route("/recruiter/requests/verify").post(jwtMiddleware,roleVerification,verifyRequest);
  router.route("/company/block").post(jwtMiddleware,roleVerification,blockUser);
  router.route("/company/unblock").post(jwtMiddleware,roleVerification,unBlockUser);
  router.route("/user/block").post(jwtMiddleware,roleVerification,blockUser);
  router.route("/user/unblock").post(jwtMiddleware,roleVerification,unBlockUser);
  router.route("/report").post(jwtMiddleware,addReport)
                         .get(jwtMiddleware,roleVerification,getReports)
  router.route("/report/action").put(jwtMiddleware,roleVerification,reportAction)
  router.route("/report/delete/:id").put(jwtMiddleware,roleVerification,deleteReport)
  


  return router;
};
