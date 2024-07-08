import { CreatePostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const getPostById = async (postId: string) => {
  try {
    if (!postId) {
      throw new Error("postId not provided");
    }
    
    const post = await Posts.findOne({_id:new Types.ObjectId(postId)})
  
    
    if (!post) {
      throw new Error("Post not found");
    }
   
    return post;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
