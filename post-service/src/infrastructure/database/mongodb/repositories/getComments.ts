import { IGetComments } from "@/domain/entities";
import { Posts } from "../models";
import { Types } from "mongoose";

export const getComments = async (data: IGetComments) => {
  try {
    const { limit, page, postId } = data;
    const skip = (page - 1) * limit;

    const objectId = new Types.ObjectId(postId);

    // Use aggregation to check for the existence of the post and fetch comments
    const result = await Posts.aggregate([
      { $match: { _id: objectId } },
      {
        $lookup: {
          from: 'comments', 
          let: { postId: '$_id' },
          pipeline: [
            { $match: { 
                $expr: { $eq: ['$postId', '$$postId'] }, 
                $or: [
                  { replyId: { $exists: false } }, 
                  { replyId: null },
                  { replyId: '' }
                ] 
              } 
            },
            { $sort: { updatedAt: -1 } },
          ],
          as: 'allComments',
        },
      },
      {
        $addFields: {
          totalComments: { $size: '$allComments' }
        }
      },
      {
        $project: {
          comments: { $slice: ['$allComments', skip, limit] },
          totalComments: 1,
        }
      }
    ]);

    if (result.length === 0) {
      throw new Error("Post not found");
    }

    const { comments, totalComments } = result[0];

    return { comments, total: totalComments };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
