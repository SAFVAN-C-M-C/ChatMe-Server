import {  CreateFollowNotification } from "@/domain/entity";
import { createFollowNotificationService } from "@/infrastructure/services";


export default async (data: CreateFollowNotification) => {
  try {
    await createFollowNotificationService(data);

  } catch (error: any) {
    console.error(
      "request-password-changed-consumed mail send error: ",
      error?.message
    );
  }
};
