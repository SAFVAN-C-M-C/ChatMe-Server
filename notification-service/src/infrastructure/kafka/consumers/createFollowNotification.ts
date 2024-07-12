import {  CreateFollowNotification } from "@/domain/entity";
import { createFollowNotificationService } from "@/infrastructure/services";


export default async (data: CreateFollowNotification) => {
  try {
    await createFollowNotificationService(data);
    console.log("++++++");
    console.log("notification sended");
    console.log("++++++");
  } catch (error: any) {
    console.log(
      "request-password-changed-consumed mail send error: ",
      error?.message
    );
  }
};
