import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controllers";


export const routes = (dependencies: IDependencies) => {
  const {

  } = controllers(dependencies);

  const router = Router();




  return router;
};
