import { Users } from "@/infrastructure/database/mongoDB/model";
import { IGetUser, IUsers } from "@/domain/entities";

export const getUsers = async (
  page: number,
  limit: number
): Promise<IGetUser | null> => {
  try {
    const skip = (page - 1) * limit;
    const totalUsers = await Users.countDocuments();
    const users = await Users.find().skip(skip).limit(limit);

    return {
      totalPages: Math.ceil(totalUsers / limit),
      currentPage: page,
      data: users as IUsers[],
    };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
