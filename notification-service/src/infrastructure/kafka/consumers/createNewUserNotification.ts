import {  CreateNewUserNotification } from "@/domain/entity";
import { createNewUserNotificationService } from "@/infrastructure/services";


export default async (data: CreateNewUserNotification) => {
  try {
    await createNewUserNotificationService(data);

  } catch (error: any) {
    console.error(
      "request-password-changed-consumed mail send error: ",
      error?.message
    );
  }
};
