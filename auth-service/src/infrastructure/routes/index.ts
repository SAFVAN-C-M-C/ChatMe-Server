import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";





export const routes = (dependencies: IDependencies) => {
  const { register,addRegisterDetails,login,logout ,googleAuth,forgotPassword,updatePassword,verifyOTP,getUser,getSignedUrl } =
    controllers(dependencies);

  const router = Router();

  router.route("/register").post(register);
  router.route("/register/details").post(jwtMiddleware,addRegisterDetails);
  router.route("/login").post(login);
  router.route("/").get(jwtMiddleware, getUser);
  router.route("/logout").delete(jwtMiddleware,logout);
  router.route("/google").post(googleAuth);
  router.route("/forgotpassword").post(forgotPassword);
  router.route("/reset-password").post(jwtMiddleware,updatePassword);
  router.route("/verify-otp").post(jwtMiddleware,verifyOTP);
  router.route("/aws/s3/signedUrl").get(jwtMiddleware,getSignedUrl);
  return router;
};
