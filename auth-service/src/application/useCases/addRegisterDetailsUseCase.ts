import { RegisterDetails } from "@/domain/entities/RegisterDetails";
import { IDependencies } from ".././interfaces/IDependencies";

export const addRegisterDetailsUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { addRegisterDetails },
  } = dependencies;
  return{
    execute: async (data:RegisterDetails) => {
    try {
      return await addRegisterDetails(data);
    } catch (error:any) {
      console.log("<< Something went wrong in verifyOtp useCase >>");
      throw new Error(error.message || "User creation failed");
    }
  }
  }
};
