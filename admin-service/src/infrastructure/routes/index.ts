import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middlewares/jwtMiddleware";





export const routes = (dependencies: IDependencies) => {
  const { getUsers,getCompanies ,getCompanyRequest,getRecruiterRequest,verifyRequest,blockUser,unBlockUser} =
    controllers(dependencies);

  const router = Router();

  router.route("/").get((req,res,next)=>{
    console.log("hello");
    
    res.json({message:"hello there"})
  });
  router.route("/users").get(jwtMiddleware,getUsers);
  router.route("/companies").get(jwtMiddleware,getCompanies);
  router.route("/companies/requests").get(jwtMiddleware,getCompanyRequest);
  router.route("/recruiter/requests").get(jwtMiddleware,getRecruiterRequest);
  router.route("/companies/requests/verify").post(jwtMiddleware,verifyRequest);
  router.route("/recruiter/requests/verify").post(jwtMiddleware,verifyRequest);
  router.route("/company/block").post(jwtMiddleware,blockUser);
  router.route("/company/unblock").post(jwtMiddleware,unBlockUser);
  router.route("/user/block").post(jwtMiddleware,blockUser);
  router.route("/user/unblock").post(jwtMiddleware,unBlockUser);
  


  return router;
};
