import { CreatePostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const createPost = async (data: CreatePostCredentials) => {
  try {
    let { email, userId } = data
    if (!email || !userId) {
      throw new Error("email and userId not provided");
    }
    const dataToCreate={
        email:data.email,
        userId:new Types.ObjectId(data.userId),
        name:data.name,
        content:data.content,
        media:data.media,
        userAvatar:data.userAvatar
    }
    const CreatedPost = await Posts.create(dataToCreate)
    if (!CreatedPost) {
      throw new Error("User not found");
    }
    console.log("post created",CreatedPost);
    return CreatedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
