import { addCompanyService, addUserService } from "@/infrastructure/services";

export default async (data: any) => {
  try {
    const newData: any = {
      name: data.name,
      email: data.email,
      userId: data.userId,
    };
    if (data.accountType === "company") {
      newData.doc = data?.doc;
      await addCompanyService(newData);
    }
    if (data.accountType === "personal") {
      await addUserService(newData);
    }
  } catch (error: any) {
    console.error("user-created-consumed mail send error: ", error?.message);
  }
};
