import {  CreateNewUserNotification } from "@/domain/entity";
import { createNewUserNotificationService } from "@/infrastructure/services";


export default async (data: CreateNewUserNotification) => {
  try {
    await createNewUserNotificationService(data);
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
