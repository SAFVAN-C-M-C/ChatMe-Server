import { AddCommentCredentials, CreatePostCredentials, DeleteComment, EditPostCredentials, ILikePost, IPosts } from "@/domain/entities";
import { ISavedPost, SavePostCredentials } from "@/domain/entities/SavedPosts";


export interface IRepositories {
  getPostsByUserId:(userId:string)=>Promise<IPosts[]|null>;
  getPosts:()=>Promise<IPosts[]|null>;
  //post managment
  createPost:(data:CreatePostCredentials)=>Promise<IPosts|null>;
  editPost:(data:EditPostCredentials)=>Promise<IPosts|null>;
  deletePost:(_id:string)=>Promise<any|null>
  //post interaction
  likePost:(data:ILikePost)=>Promise<IPosts|null>
  unLikePost:(data:ILikePost)=>Promise<IPosts|null>;

  savePost:(data:SavePostCredentials)=>Promise<ISavedPost|null>;
  unSavePost:(data:SavePostCredentials)=>Promise<ISavedPost|null>;
  getSavedPost:(userId:string)=>Promise<ISavedPost[]|null>;


  addComment:(data:AddCommentCredentials)=>Promise<{post:IPosts,id:string}|null>;
  deleteComment:(data:DeleteComment)=>Promise<IPosts|null>;

  getPostById:(postId:string)=>Promise<IPosts|null>;
}
