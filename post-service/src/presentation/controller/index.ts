import { IDependencies } from "@/application/interfaces/IDependencies"
import { createPostController } from "./createPost"
import { getUserPostsController } from "./getUserPosts"
import { getPostsController } from "./getPosts"
import { editPostController } from "./editPost"
import { deltedPostController } from "./deletePost"


export const controllers = (dependencies: IDependencies) => {
    return{
        createPost:createPostController(dependencies),
        getMyPosts:getUserPostsController(dependencies),
        getPosts:getPostsController(dependencies),
        editPost:editPostController(dependencies),
        deletePost:deltedPostController(dependencies),
    }
}