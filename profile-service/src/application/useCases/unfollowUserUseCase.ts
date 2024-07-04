import { IDependencies } from "@/application/interfaces/IDependencies";

export const unfollowUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { unfollowUser }
    } = dependencies;

    return {
        execute: async (data:{myId:string,userId:string}) => {
            
            
            return await unfollowUser(data);
        }
    }
}