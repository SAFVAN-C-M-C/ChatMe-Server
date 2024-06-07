import { Schema, Document, model, ObjectId } from "mongoose";

interface IUsers extends Document {
    _id: ObjectId;
    email: string;
    name?: string;
    userId?:ObjectId
    numberOfReportActions?: Number | null;
    IsBlocked?: boolean | null;
    CreatedAt?: Date | null;
    isVerified?:boolean;
}
const userSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        index: true,
      },
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        index: true,
      },
      numberOfReportActions: { type: Number },
      isBlocked: { type: Boolean,default:false },
      name: {
        type: String,
      },
      isVerified:{
        type:Boolean,
        default:false
      }
    },
    { timestamps: true }
  );
  export const Company = model<IUsers>("companies", userSchema);