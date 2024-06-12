import { IDependencies } from "@/application/interfaces/IDependencies";

export const blockUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { blockUser }
    } = dependencies;

    return {
        execute: async (data:{email?:string,isBlocked?:boolean,type?:string}) => {
            return await blockUser(data);
        }
    }
}