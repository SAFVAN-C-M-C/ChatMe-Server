import { UserProfile } from "../model/UserProfile";


export const deleteEducation = async (data: { avatar: string; email: string }) => {
  try {
    const { avatar, email } = data;
    if (!email) {
      throw new Error("Email not provided");
    }
    const userProfileData=await UserProfile.findOne({email:email});
    if(!userProfileData){
        throw new Error("User not found");
    }
    userProfileData.bio.avatar=avatar;
    userProfileData.save();
    return userProfileData
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
