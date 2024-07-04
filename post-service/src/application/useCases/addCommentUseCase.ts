import { AddCommentCredentials, ILikePost } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const addCommentUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { addComment }
    } = dependencies;

    return {
        execute: async (data: AddCommentCredentials) => {
            return await addComment(data);
        }
    }
}