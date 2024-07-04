
import { IDependencies } from "../interfaces/IDependencies";


export const getSavedPostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getSavedPost }
    } = dependencies;

    return {
        execute: async (userId:string) => {
            return await getSavedPost(userId);
        }
    }
}