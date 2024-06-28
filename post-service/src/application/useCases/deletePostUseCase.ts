import {  EditPostCredentials } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const deletePostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { deletePost }
    } = dependencies;

    return {
        execute: async (_id: string) => {
            return await deletePost(_id);
        }
    }
}