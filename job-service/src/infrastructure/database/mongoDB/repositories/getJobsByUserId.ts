import { ICreateJob, IJobs } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const getJobsByUserId = async (id: string) => {
  try {
    if (!id) {
      throw new Error("No id found");
    }
    const objectId = new Types.ObjectId(id);
    const jobs = await Jobs.find({
        $or: [
          { companyId: objectId },
          { recruiterId: objectId }
        ]
      }).sort({updatedAt:-1});
    if (!jobs) {
      throw new Error("No job found");
    }

    return jobs as IJobs[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
