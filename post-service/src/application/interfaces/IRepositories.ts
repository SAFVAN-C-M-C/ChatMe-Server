import { AddCommentCredentials, CreatePostCredentials, DeleteComment, EditPostCredentials, IComments, IGetComments, IGetCommentsReplys, IGetPostForHome, IGetPostForHomeResult, ILikePost, IPosts, ParamsForPostDataChart } from "@/domain/entities";
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


  addComment:(data:AddCommentCredentials)=>Promise<{newComment:IComments,recipientId:string}|null>;
  getComments:(data:IGetComments)=>Promise<{ comments:IComments[], total: number }|null>;
  getCommentReplys:(data:IGetCommentsReplys)=>Promise<{ comments:IComments[], total: number }|null>;
  deleteComment:(data:DeleteComment)=>Promise<any|null>;

  getPostById:(postId:string)=>Promise<IPosts|null>;
  getDataForChart: (data: ParamsForPostDataChart) => Promise<any[] | null>;
  searchPost:(data: {searchKey: string;})=> Promise<any[]|null>;
}
