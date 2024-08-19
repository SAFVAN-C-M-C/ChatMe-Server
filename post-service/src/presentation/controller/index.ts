import { IDependencies } from "@/application/interfaces/IDependencies"
import { createPostController } from "./createPost"
import { getUserPostsController } from "./getUserPosts"
import { getPostsController } from "./getPosts"
import { editPostController } from "./editPost"
import { deltedPostController } from "./deletePost"
import { likePostController } from "./likePost"
import { unLikePostController } from "./unLikePost"
import { savePostController } from "./savePost"
import { unSavePostController } from "./unSavePost"
import { getSavedPostController } from "./getSavedPost"
import { addCommentController } from "./addComment"
import { deleteCommentController } from "./deleteComment"
import { getUserPostByIdController } from "./getUserPostById"
import { getPostByIdController } from "./getPostById"
import { getDataForChartController } from "./getDataForChart"
import { getCommentsController } from "./getComments"
import { getCommentReplysController } from "./getCommentReplys"
import { searchPostController } from "./searchPost"


export const controllers = (dependencies: IDependencies) => {
    return{
        createPost:createPostController(dependencies),
        getMyPosts:getUserPostsController(dependencies),
        getPosts:getPostsController(dependencies),
        editPost:editPostController(dependencies),
        deletePost:deltedPostController(dependencies),
        likePost:likePostController(dependencies),
        unLikePost:unLikePostController(dependencies),
        savePost:savePostController(dependencies),
        unSavePost:unSavePostController(dependencies),
        getSavedPosts:getSavedPostController(dependencies),
        addComment:addCommentController(dependencies),
        deleteComment:deleteCommentController(dependencies),
        getUserPostById:getUserPostByIdController(dependencies),
        getPostById:getPostByIdController(dependencies),
        getDataForChart:getDataForChartController(dependencies),
        getComments:getCommentsController(dependencies),
        getCommentReplys:getCommentReplysController(dependencies),
        searchPost:searchPostController(dependencies),
    }
}