import { SavePostCredentials } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";


export const unSavePostUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { unSavePost }
    } = dependencies;

    return {
        execute: async (data: SavePostCredentials) => {
            return await unSavePost(data);
        }
    }
}