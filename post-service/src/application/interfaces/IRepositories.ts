import { CreatePostCredentials, EditPostCredentials, IPosts } from "@/domain/entities";


export interface IRepositories {
  createPost:(data:CreatePostCredentials)=>Promise<IPosts|null>;
  getPostsByUserId:(userId:string)=>Promise<IPosts[]|null>;
  getPosts:()=>Promise<IPosts[]|null>;
  editPost:(data:EditPostCredentials)=>Promise<IPosts|null>;
  deletePost:(_id:string)=>Promise<any|null>
}
