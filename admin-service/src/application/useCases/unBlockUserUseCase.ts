import { IDependencies } from "@/application/interfaces/IDependencies";

export const unBlockUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { unBlockUser }
    } = dependencies;

    return {
        execute: async (data:{email?:string,isBlocked?:boolean,type?:string}) => {
            return await unBlockUser(data);
        }
    }
}