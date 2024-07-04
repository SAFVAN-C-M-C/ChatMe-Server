import {
  CreatePostCredentials,
  EditPostCredentials,
  ILikePost,
} from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const likePost = async (data: ILikePost) => {
  try {
    let { userId, postId } = data;
    if (!userId || !postId) {
      throw new Error("post not found");
    }

    const editedPost = await Posts.findOneAndUpdate(
      { _id: new Types.ObjectId(postId) },
      { $push: { likes: userId } },
      { new: true }
    );
    if (!editedPost) {
      throw new Error("post not found");
    }
    
    return editedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
