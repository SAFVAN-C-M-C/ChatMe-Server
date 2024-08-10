
import { ICreateJob, IJobs } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const getJobs = async (filter:string) => {
  try {
    let dataFilter:any={}
    if(filter === "full-time" || filter === "part-time"){
      dataFilter.type=filter
    }
    if(filter === "On-site" || filter === "remote" || filter === "hybrid"){
      dataFilter.mode=filter
    }

    const jobs = await Jobs.find(dataFilter).sort({updatedAt:-1})
    if (!jobs) {
      console.log("No jobs found");
      return null
    }

    return jobs as IJobs[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
