
import { ICreateJob } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const deletejob = async (data: {userId:string,jobId:string}) => {
  try {
    let { userId,jobId } = data
    if (!userId|| !jobId) {
      throw new Error("Essential data not provided");
    }
    

    const deletedJob=await Jobs.findOneAndDelete({
        _id: new Types.ObjectId(jobId),
        $or: [
          { companyId: new Types.ObjectId(userId) },
          { recruiterId: new Types.ObjectId(userId) }
        ]
      });
    if (!deletedJob) {
      throw new Error("Job deletion failed");
    }

    return deletedJob;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
