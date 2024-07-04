import { Schema, Document, model, ObjectId } from "mongoose";

interface ISavedPost extends Document {
  _id?: ObjectId;
  userId?: ObjectId;
  saved: ObjectId[];
}

const savedPostSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      index: true,
    },
    saved: [{ type: Schema.Types.ObjectId,ref:"posts" }],
  },
  { timestamps: true }
);

export const SavedPosts = model<ISavedPost>("saved-posts", savedPostSchema);
