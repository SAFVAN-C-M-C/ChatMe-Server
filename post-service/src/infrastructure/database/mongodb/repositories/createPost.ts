import { CreatePostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const createPost = async (data: CreatePostCredentials) => {
  try {
    let { email, userId,content,
      media,name,tags,userAvatar
     } = data
    if (!email || !userId) {
      throw new Error("email and userId not provided");
    }
    const dataToCreate:any={
        email,
        userId:new Types.ObjectId(data.userId),
        name,
        content,
        media,
        userAvatar,
    }
    if(tags && tags.length>0){
      dataToCreate.tags=tags;
    }
    const CreatedPost = await Posts.create(dataToCreate)
    if (!CreatedPost) {
      throw new Error("User not found");
    }

    return CreatedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
