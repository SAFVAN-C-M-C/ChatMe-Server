import { AccountType } from "@/domain/entities/UserProfile";
import { Schema, Document, model, ObjectId } from "mongoose";

interface IUserProfile extends Document {
  _id: ObjectId;
  email: string;
  name?: string;
  userId: ObjectId;
  accountType?: string | "recruiter" | "company" | "personal" | null;
  preferedJobs?: string[] | null;
  title?: string | null;
  bio: {
    about?: string | null;
    avatar?: string | null;
    dob?: Date | null;
    gender?: string | null;
    resume?: IResumes[];
    doc?:string | null;
    location?: string | null;
    phone?: string | null;
  };
  skills?: string[];

  following?: ObjectId[] | null;
  followers?: ObjectId[] | null;
  theme?: string | null;
  companyDetails?: {
    companyId?: ObjectId | null;
    companyName?: string;
    jobs?: ObjectId[] | null;
    recruiters?: Recruiters[] | null;
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
interface IResumes{
  _id:ObjectId;
  name:string;
  doc:string;
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
  avatar?: string;
}
interface Recruiters {
  userId?: string | ObjectId;
  email?: string;
  name?: string;
  avatar?: string | null;
}

const educationSchema = new Schema({
  nameOfinstitue: { type: String },
  course: { type: String },
  startYear: { type: String },
  endYear: { type: String },
});

const EducationModel = model<Education>("Education", educationSchema);

const experienceSchema = new Schema({
  nameOfinstitue: { type: String },
  position: { type: String },
  startYear: { type: String },
  endYear: { type: String },
});

const ExperienceModel = model<Experience>("Experience", experienceSchema);

const recruiterApplicationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId,ref: "userProfile" },
  userEmail: { type: String },
  content: { type: String },
  name: { type: String },
  avatar: { type: String },
});

const RecruiterApplicationModel = model<RecruiterApplication>(
  "RecruiterApplication",
  recruiterApplicationSchema
);


const resumeSchema = new Schema({
  name: { type: String },
  doc: { type: String },

},{timestamps:true});

const Resume = model<IResumes>("resume", resumeSchema);
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
      avatar: { type: String,default:"/general/ChatMe-profile.png" },
      dob: { type: Date },
      gender: { type: String, enum: ["male", "female"] },
      resume: [resumeSchema],
      doc: { type: String },
      location: { type: String },
      phone: { type: String },
    },
    skills: [{ type: String }],
    following: [{ type: Schema.Types.ObjectId ,ref: "userProfile"}],
    followers: [{ type: Schema.Types.ObjectId,ref: "userProfile" }],
    theme: { type: String, enum: ["dark", "light"],default:"light" },
    companyDetails: {
      companyId: {
        type: Schema.Types.ObjectId,
        ref: "userProfile"
      },
      companyName: { type: String },
      jobs: [{ type: Schema.Types.ObjectId }],
      recruiters: [
        {
          userId: { type: Schema.Types.ObjectId,ref: "userProfile" },
          email: { type: String },
          name: { type: String },
          avatar: { type: String,default:"/general/ChatMe-profile.png" },
        },
      ],
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
