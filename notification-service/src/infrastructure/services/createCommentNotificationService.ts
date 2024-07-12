import { CreateCommentNotification } from "@/domain/entity";
import { createCommentNotification } from "../database/mongodb/repositories";

export const createCommentNotificationService = async (data: CreateCommentNotification) => {
  try {
    const newNotification = await createCommentNotification(data);
    console.log(newNotification, "======new Notification=====");
  } catch (error: any) {
    console.log(error);
  }
};
