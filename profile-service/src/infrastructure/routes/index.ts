import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";





export const routes = (dependencies: IDependencies) => {
  const { getUserProfile } =
    controllers(dependencies);

  const router = Router();

  router.route("/").get(jwtMiddleware,getUserProfile);

  return router;
};
