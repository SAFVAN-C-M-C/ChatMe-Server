import { IDependencies } from "@/application/interfaces/IDependencies";

export const verifyRequestUseCase = (dependencies: IDependencies) => {
  const {
    repositories: { verifyRequest },
  } = dependencies;

  return {
    execute: async (data: {
      email?: string;
      isVerfied?: boolean;
      type?: string;
    }) => {
      return await verifyRequest(data);
    },
  };
};
