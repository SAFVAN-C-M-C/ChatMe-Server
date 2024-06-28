
import { IDependencies } from "../interfaces/IDependencies";


export const getPostsUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getPosts }
    } = dependencies;

    return {
        execute: async () => {
            return await getPosts();
        }
    }
}