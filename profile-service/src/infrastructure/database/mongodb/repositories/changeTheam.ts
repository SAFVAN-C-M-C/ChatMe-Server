import { Education, Experience, IUserProfile } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const changeTheam = async (data:{id:string,theam:string}) => {
  try {
    let { id,theam } = data;
    if (!id || !theam) {
      throw new Error("id and theam not provided");
    }



    const userProfileData = await UserProfile.findOneAndUpdate(
      {userId:new Types.ObjectId(id)},
      { $set: { theme: theam } },
      { new: true }
    );
    if (!userProfileData) {
        
      throw new Error("User not found");
    }
    console.log("updatedData",userProfileData);
    
    return userProfileData as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
