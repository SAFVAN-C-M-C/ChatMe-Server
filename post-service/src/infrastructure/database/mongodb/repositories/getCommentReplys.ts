import { IGetComments, IGetCommentsReplys } from "@/domain/entities";
import { Comments } from "../models";
import { Types } from "mongoose";

export const getCommentReplys = async (data: IGetCommentsReplys) => {
    try {
        const { limit, page, replyId } = data;
        const skip = (page - 1) * limit;
        const replyObjectId = new Types.ObjectId(replyId);
    
        // Fetch comments with the specific replyId, sorted, limited, and skipped
        const comments = await Comments.find({
          replyId: replyObjectId
        })
          .sort({ updatedAt: -1 })
          .skip(skip)
          .limit(limit);
    
        // Get the total count of comments with the specified replyId for the given postId
        const total = await Comments.countDocuments({
          replyId: replyObjectId
        });
    
        return { comments , total };
      } catch (error: any) {
        throw new Error(error?.message);
      }
};
