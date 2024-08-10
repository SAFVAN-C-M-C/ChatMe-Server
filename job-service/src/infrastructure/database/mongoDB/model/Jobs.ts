import { Schema, Document, model, ObjectId } from "mongoose";

interface IJobs extends Document {
  _id: ObjectId;
  jobTitle: string;
  companyId: ObjectId;
  recruiterId: ObjectId;
  description: string;
  type: string;
  location: string;
  mode: String;
  skills: String[];
  email: String;
}

const jobSchema = new Schema(
  {
    companyId: { type: Schema.Types.ObjectId },
    recruiterId: { type: Schema.Types.ObjectId },
    jobTitle: { type: String },
    description: { type: String },
    type: { type: String, enum: ["full-time", "part-time"] },
    location: { type: String },
    mode: { type: String, enum: ["On-site", "remote", "hybrid"] },
    skills: [{ type: String }],
    email: { type: String },
  },
  { timestamps: true }
);

export const Jobs = model<IJobs>("jobs", jobSchema);
