import { IDependencies } from "@/application/interfaces/IDependencies";

export const getSearchedUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getSearchedUser }
    } = dependencies;

    return {
        execute: async (data: {searchKey:string}) => {
            
            
            return await getSearchedUser(data);
        }
    }
}