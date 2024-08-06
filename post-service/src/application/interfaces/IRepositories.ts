import { AddCommentCredentials, CreatePostCredentials, DeleteComment, EditPostCredentials, IGetPostForHome, IGetPostForHomeResult, ILikePost, IPosts } from "@/domain/entities";
import { ISavedPost, SavePostCredentials } from "@/domain/entities/SavedPosts";


export interface IRepositories {
  getPostsByUserId:(userId:string)=>Promise<IPosts[]|null>;
  getPosts:(data:IGetPostForHome)=>Promise<IGetPostForHomeResult|null>;
  //post managment
  createPost:(data:CreatePostCredentials)=>Promise<IPosts|null>;
  editPost:(data:EditPostCredentials)=>Promise<IPosts|null>;
  deletePost:(data:{_id:string,isAdmin?:boolean,userId:string})=>Promise<any|null>
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
