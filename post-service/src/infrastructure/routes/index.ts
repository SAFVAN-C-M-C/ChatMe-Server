import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
import { adminVerification } from "@/_lib/common/middleware/adminVerification";

//needed to refactor

export const routes = (dependencies: IDependencies) => {
  const {
    createPost,
    getMyPosts,
    getPosts,
    editPost,
    deletePost,
    likePost,
    unLikePost,
    savePost,
    unSavePost,
    getSavedPosts,
    addComment,
    deleteComment,
    getUserPostById,
    getPostById,
    getDataForChart,
    getComments,
    getCommentReplys,
    searchPost,
  } = controllers(dependencies);

  const router = Router();
  const route = (path: string) => {
    return router.route(path);
  };
  route("/").get(jwtMiddleware, getPosts);
  route("/myposts").get(jwtMiddleware, getMyPosts);
  route("/create").post(jwtMiddleware, createPost);
  route("/edit").put(jwtMiddleware, editPost);
  route("/delete/:id").delete(jwtMiddleware, deletePost);
  route("/like/:postId").put(jwtMiddleware, likePost);
  route("/unlike/:postId").put(jwtMiddleware, unLikePost);
  route("/save/:postId").put(jwtMiddleware, savePost);
  route("/unsave/:postId").put(jwtMiddleware, unSavePost);
  route("/saved").get(jwtMiddleware, getSavedPosts);
  route("/posts/search").get(jwtMiddleware, searchPost);
  route("/get/comment/:postId").get(jwtMiddleware, getComments);
  route("/get/comment/reply/:replyId").get(jwtMiddleware, getCommentReplys);
  route("/comment").post(jwtMiddleware, addComment);
  route("/comment/delete/:commentId").delete(jwtMiddleware, deleteComment);

  //this api will return all post of the user
  route("/user/:userId").get(jwtMiddleware, getUserPostById);
  //this api will return the specific post details
  route("/posts/:postId").get(jwtMiddleware, getPostById);

  //this api is to get data for the admin chart
  route("/get/chart/post/data").get(
    jwtMiddleware,
    adminVerification,
    getDataForChart
  );

  return router;
};
