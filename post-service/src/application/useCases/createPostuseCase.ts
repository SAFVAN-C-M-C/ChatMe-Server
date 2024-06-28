import { CreatePostCredentials } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const createPostuseCase = (dependencies: IDependencies) => {
    const {
        repositories: { createPost }
    } = dependencies;

    return {
        execute: async (data: CreatePostCredentials) => {
            return await createPost(data);
        }
    }
}