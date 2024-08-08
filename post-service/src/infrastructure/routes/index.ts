import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
import { adminVerification } from "@/_lib/common/middleware/adminVerification";


export const routes = (dependencies: IDependencies) => {
  const {
    createPost,getMyPosts,getPosts,editPost,deletePost,likePost,unLikePost,savePost,unSavePost,getSavedPosts,addComment,deleteComment,
    getUserPostById,getPostById,getDataForChart
  } = controllers(dependencies);

  const router = Router();
  router.route("/").get(jwtMiddleware,getPosts );
  router.route("/myposts").get(jwtMiddleware, getMyPosts);
  router.route("/create").post(jwtMiddleware, createPost);
  router.route("/edit").put(jwtMiddleware, editPost);
  router.route("/delete/:id").put(jwtMiddleware, deletePost);
  router.route("/like/:postId").put(jwtMiddleware,likePost)
  router.route("/unlike/:postId").put(jwtMiddleware,unLikePost)
  router.route("/save/:postId").put(jwtMiddleware,savePost)
  router.route("/unsave/:postId").put(jwtMiddleware,unSavePost)
  router.route("/saved").get(jwtMiddleware,getSavedPosts)
  router.route("/comment").post(jwtMiddleware,addComment)
  router.route("/comment/delete").put(jwtMiddleware,deleteComment)
  router.route("/user/:userId").get(jwtMiddleware,getUserPostById)
  router.route("/posts/:postId").get(jwtMiddleware,getPostById)
  router.route("/get/chart/post/data").get(jwtMiddleware,adminVerification,getDataForChart)




  return router;
};
