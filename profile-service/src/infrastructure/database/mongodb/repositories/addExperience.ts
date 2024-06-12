import { Education, Experience } from "@/domain/entities";
import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";

export const addExperience = async (data: Experience) => {
  try {
    let { email, experience } = data;
    if (!data.email) {
      throw new Error("email not provided");
    }



    const userProfileData = await UserProfile.findOneAndUpdate(
      {email:email},
      { $push: { experience: experience } },
      { new: true }
    );
    if (!userProfileData) {
      throw new Error("User not found");
    }
    console.log("updatedData",userProfileData);
    
    return userProfileData;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
