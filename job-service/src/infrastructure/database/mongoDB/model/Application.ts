import { Schema, Document, model, ObjectId } from "mongoose";

interface IApplication extends Document {
  userId: ObjectId;
  jobId: ObjectId;
  resume: string;
  name:string;
  phone:string;
  email:string;
  coverLetter: string;
  status: string;
}

const applicationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    jobId: { type: Schema.Types.ObjectId, ref: "Jobs", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resume: { type: String, required: true },
    coverLetter: { type: String },
    status: { type: String, enum: ["applied", "reviewed", "rejected", "accepted"], default: "applied" },
  },
  { timestamps: true }
);

export const Application = model<IApplication>("application", applicationSchema);
