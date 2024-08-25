import { IDependencies } from ".././interfaces/IDependencies";

export const verifyOtpUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { verifyOtp },
  } = dependencies;
  return {
    execute: async (email: string, otp: string) => {
      try {
        return await verifyOtp(email, otp);
      } catch (error: any) {
        console.log("<< Something went wrong in verifyOtp useCase >>");
        throw new Error(error.message || "verifyOtp failed");
      }
    },
  };
};
