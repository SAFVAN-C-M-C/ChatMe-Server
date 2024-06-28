
import { IDependencies } from "../interfaces/IDependencies";


export const getPostsByUserIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getPostsByUserId }
    } = dependencies;

    return {
        execute: async (userId: string) => {
            return await getPostsByUserId(userId);
        }
    }
}