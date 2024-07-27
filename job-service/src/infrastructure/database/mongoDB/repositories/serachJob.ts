
import { ICreateJob } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const serachJob = async (data:{searchKey:string}) => {
    try {
        const {searchKey}=data
        if(!searchKey){
            throw new Error("Search key not provided");
        }
        const regex = new RegExp(`^${searchKey}`, 'i');
        const searchedJobs = await Jobs.find({
            $or: [
              { jobTitle: { $regex: regex } },
              { skills: { $regex: regex } }
            ]
          });
        if (!searchedJobs) {
          throw new Error("Somthing wentWrong");
        }
    
        return searchedJobs;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
