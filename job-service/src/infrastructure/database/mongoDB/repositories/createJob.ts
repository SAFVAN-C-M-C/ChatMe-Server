
import { ICreateJob } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const createJob = async (data: ICreateJob) => {
  try {
    let { email, companyId,description,jobTitle,location,mode,recruiterId,skills,type } = data
    if (!companyId|| !description|| !jobTitle) {
      throw new Error("Essential data not provided");
    }
    
    const dataToCreate={
      companyId:new Types.ObjectId(companyId),
      description,
      jobTitle,
      email:email?email:"",
      location:location?location:"",
      mode:mode?mode:"",
      recruiterId:recruiterId?recruiterId:"",
      skills:skills?skills:"",
      type:type?type:""
    }
    const CreatedPost = await Jobs.create(dataToCreate)
    if (!CreatedPost) {
      throw new Error("Post creation failed");
    }

    return CreatedPost;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
