import { ILikePost } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const unLikePostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { unLikePost }
    } = dependencies;

    return {
        execute: async (data: ILikePost) => {
            return await unLikePost(data);
        }
    }
}