import {  CreateFollowNotification } from "@/domain/entity";
import { createFollowNotification } from "../database/mongodb/repositories";

export const createFollowNotificationService = async (data: CreateFollowNotification) => {
  try {
    const newNotification = await createFollowNotification(data);
    console.log(newNotification, "======new Notification=====");
  } catch (error: any) {
    console.log(error);
  }
};
