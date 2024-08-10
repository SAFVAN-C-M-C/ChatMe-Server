import { GetMyApplicationParams, IApplication } from "@/domain/entities";
import { Application, Jobs } from "../model";
import { Types } from "mongoose";

export const getMyJobApplications = async (data: GetMyApplicationParams) => {
  try {
    let { status, userId } = data;
    if (!status || !userId) {
      throw new Error("Essential data not given");
    }
    let filter: any = { userId: new Types.ObjectId(userId) };

    if (status && status !== "all") {
      filter.status = status;
    }
    const applications = await Application.find(filter);
    return applications as IApplication[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
