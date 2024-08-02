import { UserProfile } from "@/infrastructure/database/mongodb/model";
import { IUserProfile } from "@/domain/entities";
import { Types } from "mongoose";
import { RecruiterApplication } from "@/domain/entities/RecruiterApplication";

export const recruiterApplication = async (
  data: RecruiterApplication
): Promise<IUserProfile | null> => {
  try {
    const { companyEmail, name, content, userEmail, userId } = data;
   
    const user=await UserProfile.findOne({email:userEmail});
    if(!user){
        throw new Error("User not found")
    }
    const documentToPush = {
        name: name,
        content: content,
        userEmail: userEmail,
        userId: userId,
        avatar:user.bio.avatar || ""
      };
    let userProfileData = await UserProfile.findOneAndUpdate(
        {
          email: companyEmail,
          accountType: "company",
          "recruiterApplication.userEmail": userEmail // Find the document with the same userEmail
        },
        {
          $set: { "recruiterApplication.$": documentToPush } // Update the matched document
        },
        {
          new: true
        }
      );
    
      // If no existing document was updated, push a new one
      if (!userProfileData) {
        userProfileData = await UserProfile.findOneAndUpdate(
          {
            email: companyEmail,
            accountType: "company"
          },
          {
            $push: { recruiterApplication: documentToPush }
          },
          {
            new: true
          }
        );
      }

    if (!userProfileData) {
      throw new Error("Company does not exist!");
    }

    return userProfileData as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
