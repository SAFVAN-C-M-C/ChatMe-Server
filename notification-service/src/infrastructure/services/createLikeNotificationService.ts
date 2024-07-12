import { CreateLikeNotification } from "@/domain/entity";
import { createLikeNotification } from "../database/mongodb/repositories";

export const createLikeNotificationService = async (data: CreateLikeNotification) => {
  try {
    const newNotification = await createLikeNotification(data);
    console.log(newNotification, "======new Notification=====");
  } catch (error: any) {
    console.log(error);
  }
};
