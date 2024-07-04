import { IDependencies } from "@/application/interfaces/IDependencies";

export const followUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { followUser }
    } = dependencies;

    return {
        execute: async (data:{myId:string,userId:string}) => {
            
            
            return await followUser(data);
        }
    }
}