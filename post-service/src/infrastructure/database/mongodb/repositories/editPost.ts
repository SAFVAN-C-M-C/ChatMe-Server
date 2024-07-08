import { CreatePostCredentials, EditPostCredentials } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const editPost = async (data: EditPostCredentials) => {
  try {
    let { content,_id } = data
    if (!_id) {
      throw new Error("post not found");
    }

    const editedPost = await Posts.findOneAndUpdate(
        {_id:new Types.ObjectId(_id)},
        { $set: { content: content } },
        { new: true }
    )
    if (!editedPost) {
      throw new Error("post not found");
    }

    return editedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
