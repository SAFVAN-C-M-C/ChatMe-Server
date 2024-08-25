// import { sendVerificationMail } from "@/infrastructure/services";

import { addUserService } from "@/infrastructure/services";

export default async (data: any) => {
  try {
    await addUserService(data.email, data.userId);
  } catch (error: any) {
    console.error("user-created-consumed mail send error: ", error?.message);
  }
};
