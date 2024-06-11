import { AccountType } from "@/domain/entities/UserProfile";
import { Schema, Document, model, ObjectId } from "mongoose";

interface IUserProfile extends Document {
  _id: ObjectId;
  email: string;
  name?: string;
  userId: ObjectId;
  accountType?: AccountType | null;
  preferedJobs?: string[] | null;
  title?: string | null;
  bio: {
    about?: string | null;
    avatar?: string | null;
    dob?: Date | null;
    gender?: string | null;
    resume?: string | null;
    location?: string | null;
    phone?: string | null;
  };
  companyId?: ObjectId | null;
  companyName?: string;
  following?: ObjectId[] | null;
  followers?: ObjectId[] | null;
  theme?: string | null;
  companyDetails?: {
    jobs?: ObjectId[] | null;
    recruiters?: ObjectId[] | null;
  };
  recruiterApplication?: RecruiterApplication[];
  education?: Education[];
  experience?: Experience[];
  isVerified: boolean;
}

interface Education {
  _id?: ObjectId;
  nameOfinstitue?: string;
  course?: string;
  startYear?: string;
  endYear?: string;
}

interface Experience {
  _id?: ObjectId;
  nameOfinstitue?: string;
  position?: string;
  startYear?: string;
  endYear?: string;
}

interface RecruiterApplication {
  _id?: ObjectId;
  userId?: string | ObjectId;
  userEmail?: string;
  content?: string;
  name?: string;
}

const educationSchema = new Schema({
  nameOfinstitue: { type: String },
  course: { type: String },
  startYear: { type: String },
  endYear: { type: String }
});

const EducationModel = model<Education>("Education", educationSchema);

const experienceSchema = new Schema({
  nameOfinstitue: { type: String },
  position: { type: String },
  startYear: { type: String },
  endYear: { type: String }
});

const ExperienceModel = model<Experience>("Experience", experienceSchema);

const recruiterApplicationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId },
  userEmail: { type: String },
  content: { type: String },
  name: { type: String }
});

const RecruiterApplicationModel = model<RecruiterApplication>("RecruiterApplication", recruiterApplicationSchema);

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
      gender: { type: String, enum: ["male", "female"] },
      resume: { type: String },
      location: { type: String },
      phone: { type: String },
    },
    companyId: {
      type: Schema.Types.ObjectId,
    },
    following: [{ type: Schema.Types.ObjectId }],
    followers: [{ type: Schema.Types.ObjectId }],
    theme: { type: String, enum: ["dark", "light"] },
    companyDetails: {
      jobs: [{ type: Schema.Types.ObjectId }],
      recruiters: [{ type: Schema.Types.ObjectId }],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    recruiterApplication: [recruiterApplicationSchema],
    education: [educationSchema],
    experience: [experienceSchema],
  },
  { timestamps: true }
);

export const UserProfile = model<IUserProfile>("userProfile", userSchema);
