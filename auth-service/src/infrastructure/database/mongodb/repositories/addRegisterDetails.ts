import { User } from "@/infrastructure/database/mongodb/models";
import { LoginCredential, UserEntity } from "@/domain/entities";
import { RegisterDetails } from "@/domain/entities/RegisterDetails";

export const addRegisterDetails = async (
  data: RegisterDetails
): Promise<UserEntity | null> => {
  try {
    const userData = await User.findOne({ email: data?.email });
    console.log("here in repo ",userData);
    
    if (!userData) {
      throw new Error("User creation failed!");
    }
    
      userData.name = data?.name;
      userData.location = data?.location;
      userData.phone = data?.phone;
      userData.accountType=data?.accountType;
      userData.isDetailsComplete=true
   
    
    
    userData.save();
    return userData;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
