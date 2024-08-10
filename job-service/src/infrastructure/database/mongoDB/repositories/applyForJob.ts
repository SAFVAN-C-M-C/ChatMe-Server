import { ApplicationParams } from "@/domain/entities";
import { Types } from "mongoose";
import { Application } from "../model";

export const applyForJob = async (data: ApplicationParams) => {
  try {
    let { coverLetter, email, jobId, name, phone, resume, userId } = data;
    if (
      !coverLetter ||
      !email ||
      !jobId ||
      !name ||
      !phone ||
      !resume ||
      !userId
    ) {
      throw new Error("Essential data not provided");
    }

    const dataToCreate = {
      coverLetter,
      email,
      jobId: new Types.ObjectId(jobId),
      name,
      phone,
      resume,
      userId: new Types.ObjectId(userId),
    };
    const jobApplcation = await Application.create(dataToCreate);
    if (!jobApplcation) {
      throw new Error("job Applcation creation failed");
    }

    return jobApplcation;
  } catch (error: any) {
    console.error(error?.message);
    throw new Error(error?.message);
  }
};
