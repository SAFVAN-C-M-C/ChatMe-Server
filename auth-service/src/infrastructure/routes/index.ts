import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
// import { jwtMiddleware } from "@/_lib/common";


export const routes = (dependencies: IDependencies) => {
  const { register,addRegisterDetails,login,logout ,googleAuth,forgotPassword,updatePassword } =
    controllers(dependencies);

  const router = Router();

  router.route("/register").post(register);
  router.route("/register/details").put(addRegisterDetails);
  router.route("/login").post(login);
  // router.route("/").get(jwtMiddleware, getUser);
  router.route("/logout").delete(logout);
  router.route("/google").post(googleAuth);
  router.route("/forgotpassword").post(forgotPassword)
  router.route("/reset-password").post(updatePassword)
  // router.route("/verify-otp").post(verifyOtp)

  return router;
};
