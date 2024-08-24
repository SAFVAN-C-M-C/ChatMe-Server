import { Schema, Document, model, ObjectId } from "mongoose";

interface IReports extends Document {
  _id: ObjectId;
  userId?: string;
  suspectId?: string;
  reason?: string;
  postId?: string;
}
const reportSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    suspectId: {
      type: Schema.Types.ObjectId,
    },
    reason: {
      type: String,
    },
    postId: {
      type: Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);
export const Reports = model<IReports>("reports", reportSchema);
