import { UserProfile } from "../model/UserProfile";
import { Types } from "mongoose";
import { AcceptRequest } from "@/domain/entities/RecruiterApplication";
import { IUserProfile } from "@/domain/entities";

export const ignoreRecruiter = async (data: AcceptRequest) => {
  try {
    let { email, requestId, userEmail } = data;
    if (!data.email) {
      throw new Error("email not provided");
    }

    const updatedUserProfile = await UserProfile.findOneAndUpdate(
      {
        email: email,
      },
      {
        $pull: {
          recruiterApplication: {
            $or: [
              { _id: new Types.ObjectId(String(requestId)) },
              { userEmail: userEmail },
            ],
          },
        },
      },
      {
        new: true,
      }
    );
    if (!updatedUserProfile) {
      throw new Error("User not found");
    }


    return updatedUserProfile as IUserProfile;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
