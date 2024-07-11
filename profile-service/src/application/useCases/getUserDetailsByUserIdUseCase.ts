import { IDependencies } from "@/application/interfaces/IDependencies";

export const getUserDetailsByUserIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getUserDetailsByUserId }
    } = dependencies;

    return {
        execute: async (id: string) => {
            
            
            return await getUserDetailsByUserId(id);
        }
    }
}