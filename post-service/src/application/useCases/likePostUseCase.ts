import { ILikePost } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const likePostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { likePost }
    } = dependencies;

    return {
        execute: async (data: ILikePost) => {
            return await likePost(data);
        }
    }
}