import { BioDetails } from "@/domain/entities/BioDetails";
import { UserProfile } from "../model/UserProfile";
import { IUserProfile } from "@/domain/entities";

export const updateBio = async (data: BioDetails) => {
  try {
    const { bio, name, title, email } = data;
    if (!email) {
      throw new Error("Email not provided");
    }
    const userProfileData = await UserProfile.findOne({ email: email });
    if (!userProfileData) {
      throw new Error("User not found");
    }
    if (name) userProfileData.name = name;
    if (title) userProfileData.title = title;
    if (bio?.location) userProfileData.bio.location = bio.location;
    if (bio?.phone) userProfileData.bio.phone = bio.phone;
    if (bio?.doc) userProfileData.bio.doc = bio.doc;
    userProfileData.save();
    return userProfileData as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
