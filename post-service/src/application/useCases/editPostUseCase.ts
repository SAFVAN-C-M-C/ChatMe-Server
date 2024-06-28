import {  EditPostCredentials } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const editPostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { editPost }
    } = dependencies;

    return {
        execute: async (data: EditPostCredentials) => {
            return await editPost(data);
        }
    }
}