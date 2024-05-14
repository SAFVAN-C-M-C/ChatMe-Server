import { User } from "../models";
import { LoginCredential, UserEntity } from "@/domain/entities";

export const updateUserPassword=async(data:LoginCredential): Promise<UserEntity> =>{
    try {
        const updatePassword = await User.findOneAndUpdate(
            {
              email: data.email,
            },
            {
              password: data.password,
            },
            {
              new: true,
            }
          );
          if (!updatePassword) {
            throw new Error("User password update failed");
          }
      
          return updatePassword;
    } catch (error:any) {
        throw new Error(error?.message);
    }
}