import { Schema, Document, model, ObjectId } from "mongoose";

interface IRecruiterRequest extends Document {
  _id: ObjectId;
  email?: string;
  name?: string;
  companyId?: ObjectId;
  companyName?: string;
}
const recruiterRequestSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
    },
    companyId: {
      type: Schema.Types.ObjectId,
    },
    companyName: {
      type: String,
    },
  },
  { timestamps: true }
);
export const RecruiterReqest = model<IRecruiterRequest>(
  "recruiter-requests",
  recruiterRequestSchema
);
