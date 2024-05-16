import { IDependencies } from ".././interfaces/IDependencies";

export const updateUserFieldUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { updateUserField },
  } = dependencies;
  return{
    execute: async (email:string,field: string, value: boolean) => {
    try {   
      return await updateUserField(email,field,value);
    } catch (error) {
      console.log("<< Something went wrong in verifyOtp useCase >>");
      return null;
    }
  }
  }
};
