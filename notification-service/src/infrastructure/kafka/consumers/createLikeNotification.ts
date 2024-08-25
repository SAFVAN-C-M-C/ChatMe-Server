import {  CreateLikeNotification } from "@/domain/entity";
import { createLikeNotificationService } from "@/infrastructure/services";


export default async (data: CreateLikeNotification) => {
  try {
    await createLikeNotificationService(data);

  } catch (error: any) {
    console.error(
      "request-password-changed-consumed mail send error: ",
      error?.message
    );
  }
};
