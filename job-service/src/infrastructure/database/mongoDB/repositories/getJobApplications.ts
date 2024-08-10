import { GetApplicationParams, IApplication } from "@/domain/entities";
import { Application, Jobs } from "../model";
import { Types } from "mongoose";

export const getJobApplications = async (data: GetApplicationParams) => {
  try {
    let { jobId,status,userId } = data;
    if(!jobId || !status || !userId){
        throw new Error("Essential data not given")
    }
    const job=await Jobs.findOne({_id:new Types.ObjectId(jobId)});
    if(!job){
        throw new Error("Job Not found")
    }
    if(userId !==String(job.companyId) && userId !== String(job.recruiterId)){
        throw new Error("Unauthorized")
    }
    let filter: any = { jobId:new Types.ObjectId(jobId) };

    if (status && status !== "all") {
      filter.status = status;
    }
    const applications = await Application.find(filter)
    return applications as IApplication[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
