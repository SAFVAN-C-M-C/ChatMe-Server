import { Posts } from "../models";

export const searchPost = async (data: {searchKey: string}) => {
    try {
      let { searchKey } = data;
      if (!searchKey) {
        throw new Error("searchKey not found");
      }
      const regex = new RegExp(`${searchKey}`, 'gi'); // Create a case-insensitive regex pattern

      // Perform the search using aggregate
      const posts = await Posts.aggregate([
        {
          $lookup: {
            from: "comments", // Name of the comments collection
            localField: "comments",
            foreignField: "_id",
            as: "commentsData",
          },
        },
        {
          $match: {
            $or: [
              { "tags": { $regex: regex } },
              { "commentsData.comment": { $regex: regex } },
            ],
          },
        },
        {
          $addFields: {
            likeCount: { $size: "$likes" } // Add a field that counts the number of likes
          }
        },
        {
          $sort: { likeCount: -1 } // Sort by like count in descending order
        },
        {
          $project: {
            _id:1,
            userId: 1,
            userAvatar: 1,
            name: 1,
            tags: 1,
            media: 1,
            content: 1,
            likes: 1,
            comments: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      ]);
return posts

    } catch (error: any) {
      throw new Error(error?.message);
    }
  };
  