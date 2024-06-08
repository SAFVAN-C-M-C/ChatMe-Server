import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middlewares/jwtMiddleware";





export const routes = (dependencies: IDependencies) => {
  const { getUsers } =
    controllers(dependencies);

  const router = Router();

  router.route("/").get((req,res,next)=>{
    console.log("hello");
    
    res.json({message:"hello there"})
  });
  router.route("/users").get(jwtMiddleware,getUsers);

  return router;
};
