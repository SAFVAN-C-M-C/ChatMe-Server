
import { IDependencies } from "../interfaces/IDependencies";


export const getPostByIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getPostById }
    } = dependencies;

    return {
        execute: async (postId: string) => {
            return await getPostById(postId);
        }
    }
}