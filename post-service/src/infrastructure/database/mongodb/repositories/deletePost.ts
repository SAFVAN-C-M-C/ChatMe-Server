import { CreatePostCredentials, EditPostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const deletePost = async (_id: string) => {
  try {
    if (!_id) {
      throw new Error("post not found");
    }

    const deltedPost = await Posts.findOneAndDelete({
      _id: new Types.ObjectId(_id),
    });
    if (!deltedPost) {
      throw new Error("post not found");
    }
    console.log("post deleted", deltedPost);
    return deltedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
