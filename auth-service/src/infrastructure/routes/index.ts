import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
// import { jwtMiddleware } from "@/_lib/common";


export const routes = (dependencies: IDependencies) => {
  const { register,  } =
    controllers(dependencies);

  const router = Router();

  router.route("/register").post(register);


  return router;
};
