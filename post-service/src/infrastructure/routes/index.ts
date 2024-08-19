import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
import { adminVerification } from "@/_lib/common/middleware/adminVerification";

//needed to refactor

export const routes = (dependencies: IDependencies) => {
  const {
    createPost,getMyPosts,getPosts,editPost,deletePost,likePost,unLikePost,savePost,unSavePost,getSavedPosts,addComment,deleteComment,
    getUserPostById,getPostById,getDataForChart,getComments,getCommentReplys,searchPost
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

  
  router.route("/posts/search").get(jwtMiddleware,searchPost)
  router.route("/get/comment/:postId").get(jwtMiddleware,getComments)
  router.route("/get/comment/reply/:replyId").get(jwtMiddleware,getCommentReplys)
  router.route("/comment").post(jwtMiddleware,addComment)
  router.route("/comment/delete/:commentId").delete(jwtMiddleware,deleteComment)


  //this api will return all post of the user
  router.route("/user/:userId").get(jwtMiddleware,getUserPostById)
  //this api will return the specific post details
  router.route("/posts/:postId").get(jwtMiddleware,getPostById)



  //this api is to get data for the admin chart
  router.route("/get/chart/post/data").get(jwtMiddleware,adminVerification,getDataForChart)

  return router;
};
