import { CreateNewUserNotification } from "@/domain/entity";
import { createNewUserNotification } from "../database/mongodb/repositories";

export const createNewUserNotificationService = async (data: CreateNewUserNotification) => {
  try {
    const newNotification = await createNewUserNotification(data);
    console.log(newNotification, "======new Notification=====");
  } catch (error: any) {
    console.log(error);
  }
};
