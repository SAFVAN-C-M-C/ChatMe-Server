import { ICreateJob, IJobs } from "@/domain/entities/Jobs";
import { ObjectId, Types } from "mongoose";
import { Jobs } from "../model";

export const getJobDetails = async (id: string) => {
  try {
    if (!id) {
      throw new Error("No id found");
    }
    const job = await Jobs.findOne({ _id: new Types.ObjectId(id) });
    if (!job) {
      throw new Error("No job found");
    }

    return job as IJobs;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
