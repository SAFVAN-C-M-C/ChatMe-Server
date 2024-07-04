import { SavePostCredentials } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const savePostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { savePost }
    } = dependencies;

    return {
        execute: async (data: SavePostCredentials) => {
            return await savePost(data);
        }
    }
}