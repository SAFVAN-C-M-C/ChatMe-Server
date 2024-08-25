import { UserProfile } from "@/infrastructure/database/mongodb/model";
import { IGetUsersArrayOfId, UserShocaseDeatials } from "@/domain/entities";
import { Types } from "mongoose";

export const getUsersByArrayOfId = async (
  data: IGetUsersArrayOfId
): Promise<any[] | null> => {
  try {
    const objectIds = data.user.map((id) => new Types.ObjectId(id));
    const existingUser = await UserProfile.find({
      userId: { $in: objectIds },
    }).select(
      "_id userId bio.avatar accountType isVerified name bio.location email"
    );

    if (!existingUser) {
      throw new Error("User does not exist!");
    }

    return existingUser;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
