import { DeleteComment } from "@/domain/entities";
import { Comments, Posts } from "../models";
import { Types } from "mongoose";

export const deleteComment = async (data: DeleteComment) => {
  try {
    const { commentId, userId } = data;
    if (!commentId || !userId) {
      throw new Error("Details not given");
    }
    const objectId = new Types.ObjectId(commentId);
    const userObjectId = new Types.ObjectId(userId);
console.log(objectId,userObjectId);

    // Find the comment by its ID and check if the userId matches
    const comment = await Comments.findOne({
      _id: objectId,
      userId: userObjectId,
    });

    if (!comment) {
      throw new Error(
        "Comment not found or user is not authorized to delete this comment"
      );
    }

    // If the comment is a reply, update the parent comment's reply count
    if (comment.replyId) {
      const replyComment = await Comments.findOne({
        _id: new Types.ObjectId(String(comment.replyId)),
      });
      if (replyComment) {
        replyComment.replys--;
        await replyComment.save();
      }
    }

    // Pull the comment's ObjectId from the post's comments array
    await Posts.findOneAndUpdate(
      { _id: new Types.ObjectId(String(comment.postId)) },
      { $pull: { comments: objectId } }
    );

    // Delete the comment
    await Comments.deleteOne({ _id: objectId });

    return { success: true, message: "Comment deleted successfully" };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
