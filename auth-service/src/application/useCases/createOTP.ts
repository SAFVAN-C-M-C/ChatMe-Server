import { IDependencies } from "@/application/interfaces/IDependencies";

export const createOTP = (dependencies: IDependencies) => {
    const {
        repositories: { createOTP }
    } = dependencies;

    return {
        execute: async (email: string) => {
            return await createOTP(email);
        }
    }
}