// import { sendVerificationMail } from "@/infrastructure/services";

import { IUserProfile } from "@/domain/entities";
import { updateVerificationService } from "@/infrastructure/services";

export default async (data: any) => {
  try {
    const newData = {
      email: data.email,
      isVerified: data.isVerified,
    };
    await updateVerificationService(newData);
  } catch (error: any) {
    console.error("user-created-consumed mail send error: ", error?.message);
  }
};
