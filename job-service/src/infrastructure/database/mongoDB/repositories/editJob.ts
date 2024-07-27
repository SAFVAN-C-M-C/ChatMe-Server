
import { ICreateJob, IEditJob } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const editJob = async (data: IEditJob) => {
  try {
    let { email,description,jobTitle,location,mode,skills,type,jobId,userId } = data
    if (!userId|| !jobId) {
      throw new Error("Essential data not provided");
    }
    
    const job = await Jobs.findOne({_id:new Types.ObjectId(jobId)})

    if (!job) {
      throw new Error("job not found");
    }
    if(String(job.companyId)!==userId && String(job.recruiterId)!==userId){
        throw new Error("don't have authority to edit");
    }
    if(email) job.email=email;
    if(description) job.description=description;
    if(jobTitle) job.jobTitle=jobTitle;
    if(location) job.location=location;
    if(mode) job.mode=mode;
    if(skills) job.skills=skills;
    if(type) job.type=type
    await job.save();
    
    return job;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
