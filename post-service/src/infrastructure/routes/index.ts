import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";


export const routes = (dependencies: IDependencies) => {
  const {
    createPost,getMyPosts,getPosts,editPost,deletePost
  } = controllers(dependencies);

  const router = Router();
  router.route("/").get(jwtMiddleware,getPosts );
  router.route("/myposts").get(jwtMiddleware, getMyPosts);
  router.route("/create").post(jwtMiddleware, createPost);
  router.route("/edit").put(jwtMiddleware, editPost);
  router.route("/delete").put(jwtMiddleware, deletePost);
  return router;
};
