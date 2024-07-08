import {
  AddCommentCredentials,
  CreatePostCredentials,
  DeleteComment,
  EditPostCredentials,
} from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const deleteComment = async (data: DeleteComment) => {
  try {
    let { commentId, userId, postId } = data;
    if (!postId) {
      throw new Error("post not found");
    }
    

    if (!commentId || !userId) {
      throw new Error("details not given");
    }
    // Find the post by postId and ensure the user has permission to delete the comment
    const updatedPost = await Posts.findOneAndUpdate(
      {
        _id: new Types.ObjectId(postId),
        $or: [
          { userId: new Types.ObjectId(userId) }, // User is the owner of the post
          {
            "comments._id": new Types.ObjectId(commentId),
            "comments.userId": userId,
          }, // User is the owner of the comment
        ],
      },
      { $pull: { comments: { _id: new Types.ObjectId(commentId) } } },
      { new: true } // Return the updated document
    );
    if (!updatedPost) {
      throw new Error("Post or comment not found or user does not have permission.");
    }

    return updatedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
