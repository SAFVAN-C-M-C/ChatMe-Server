
import { ICreateJob, IJobs } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const getJobs = async () => {
  try {
    const jobs = await Jobs.find().sort({updatedAt:-1})
    if (!jobs) {
      console.log("No jobs found");
      return null
    }

    return jobs as IJobs[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
