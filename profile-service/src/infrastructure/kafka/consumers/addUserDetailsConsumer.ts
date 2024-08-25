// import { sendVerificationMail } from "@/infrastructure/services";

import { IUserProfile } from "@/domain/entities";
import { addUserDetailService } from "@/infrastructure/services";

export default async (data: any) => {
  try {
    const newData: IUserProfile = {
      email: data.email,
      userId: data.userId,
      name: data.name,
      accountType: data.accountType,
      bio: {
        phone: data.phone,
        location: data.location,
        doc: data.doc,
      },
    };
    await addUserDetailService(newData);
  } catch (error: any) {
    console.error("user-created-consumed mail send error: ", error?.message);
  }
};
