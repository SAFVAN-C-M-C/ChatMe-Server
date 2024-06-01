import { AccountType } from "@/domain/entity/UserProfile";
import { Schema, Document, model, ObjectId } from "mongoose";


interface IUserProfile extends Document {
  _id: ObjectId;
  email: String;
  name?: String;
  userId: ObjectId;
  accountType?: AccountType | null;
  preferedJobs?: String[] | null;
  title?: String | null;
  bio: {
    about?: String | null;
    avatar?: String | null;
    dob?: Date | null;
    gender?: String | null;
    resume?: String | null;
    location?: String | null;
    phone?: String | null;
  };
  campanyId?: ObjectId | null;
  following?: ObjectId[] | null;
  followers?: ObjectId[] | null;
  theme?: String | null;
  companyDetails?: {
    jobs?: ObjectId[] | null;
    recruiters?: ObjectId[] | null;
  };
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
    name: {
      type: String,
    },
    accountType: {
      type: String,
      enum: ["personal", "company", "recruiter"],
      default: "personal",
    },
    preferedJobs: [{ type: String }],
    title: { type: String },
    bio: {
      about: { type: String },
      avatar: { type: String },
      dob: { type: Date },
      gender: { type: String, enum: ["male", " female"] },
      resume: { type: String },
      location: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    companyId: {
      type: Schema.Types.ObjectId,
    },
    following: [{ type: Schema.Types.ObjectId }],
    followers: [{ type: Schema.Types.ObjectId }],
    theme: { type: String, enum: ["dark", " light"] },
    companyDetails: {
      jobs: [{ type: Schema.Types.ObjectId }],
      recruiters: [{ type: Schema.Types.ObjectId }],
    },
  },
  { timestamps: true }
);

export const UserProfile = model<IUserProfile>("userProfile", userSchema);
