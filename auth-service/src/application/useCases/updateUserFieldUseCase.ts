import { IDependencies } from ".././interfaces/IDependencies";

export const updateUserFieldUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { updateUserField },
  } = dependencies;
  return {
    execute: async (email: string, field: string, value: boolean) => {
      try {
        return await updateUserField(email, field, value);
      } catch (error: any) {
        console.log("<< Something went wrong in updateUserFieldUseCase >>");
        throw new Error(error.message || "update user failed");
      }
    },
  };
};
