import {  EditPostCredentials } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const deletePostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { deletePost }
    } = dependencies;

    return {
        execute: async (data:{_id:string,isAdmin?:boolean,userId:string}) => {
            return await deletePost(data);
        }
    }
}