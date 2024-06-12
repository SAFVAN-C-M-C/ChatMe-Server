import { Schema, Document, model, ObjectId } from "mongoose";

interface ICompanyRequest extends Document {
    _id: ObjectId;
    email?: string;
    name?: string;
}
const companyRequestSchema = new Schema(
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
    },
    { timestamps: true }
  );
  export const CompanyReqest = model<ICompanyRequest>("companies-requests", companyRequestSchema);