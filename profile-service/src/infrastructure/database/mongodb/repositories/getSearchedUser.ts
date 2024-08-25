import { UserProfile } from "@/infrastructure/database/mongodb/model";
import { IUserProfile } from "@/domain/entities";
import { Types } from "mongoose";

export const getSearchedUser = async (data: {
  searchKey: string;
}): Promise<IUserProfile[] | null> => {
  try {
    const { searchKey } = data;
    if (!searchKey) {
      throw new Error("Search key not provided");
    }
    const regex = new RegExp(`${searchKey}`, "gi");
    const searchedUser = await UserProfile.find({
      name: { $regex: regex },
    });
    if (!searchedUser) {
      throw new Error("Somthing wentWrong");
    }

    return searchedUser as IUserProfile[];
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
