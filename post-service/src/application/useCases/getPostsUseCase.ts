
import { IGetPostForHome } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const getPostsUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getPosts }
    } = dependencies;

    return {
        execute: async (data:IGetPostForHome) => {
            return await getPosts(data);
        }
    }
}