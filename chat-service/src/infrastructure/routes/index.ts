import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const routes = (dependencies: IDependencies) => {
  const {

  } = controllers(dependencies);

  const router = Router();


  return router;
};
