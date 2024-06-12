import { addCompanyService, addUserService } from "@/infrastructure/services";
import { addrecruiterRequestService } from "@/infrastructure/services/addrecruiterRequestService";
import { ObjectId } from "mongoose";

export default async (data: {
  email?: string;
  name?: string;
  companyId?: ObjectId;
  companyName?: string;
}) => {
  try {
    console.log("==========");
    console.log(typeof data);
    console.log(data);
    console.log("==========");
    const newData = {
      name: data.name,
      email: data.email,
      companyId: data.companyId,
      companyName: data.companyName,
    };
    
      await addrecruiterRequestService(newData);
    
    

    console.log("===============userProfileCreated==============");
  } catch (error: any) {
    console.log("user-created-consumed mail send error: ", error?.message);
  }
};
