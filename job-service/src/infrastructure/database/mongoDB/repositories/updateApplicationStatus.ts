import { IApplication, UpdateStatus } from "@/domain/entities";
import { Application, Jobs } from "../model";
import { Types } from "mongoose";

export const updateApplicationStatus = async (data: UpdateStatus) => {
  try {
    let { jobId, status, userId, applicationId } = data;
    if (!jobId || !status || !userId || !applicationId) {
      throw new Error("Essential data not given");
    }
    const job = await Jobs.findOne({ _id: new Types.ObjectId(jobId) });
    if (!job) {
      throw new Error("Job Not found");
    }
    if (
      userId !== String(job.companyId) &&
      userId !== String(job.recruiterId)
    ) {
      throw new Error("Unauthorized");
    }
    const application = await Application.findById(
      new Types.ObjectId(applicationId)
    );
    if (!application) {
      throw new Error("Application Not found");
    }
    application.status = status;
    await application.save();
    return application;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
