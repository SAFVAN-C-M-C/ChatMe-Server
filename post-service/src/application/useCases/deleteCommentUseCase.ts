import {  DeleteComment, EditPostCredentials } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const deleteCommentUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { deleteComment }
    } = dependencies;

    return {
        execute: async (data:DeleteComment) => {
            return await deleteComment(data);
        }
    }
}