import { IDependencies } from "@/application/interfaces/IDependencies";
import { IGetUsersArrayOfId } from "@/domain/entities";

export const getUsersByArrayOfIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getUsersByArrayOfId }
    } = dependencies;

    return {
        execute: async (data: IGetUsersArrayOfId) => {
            
            
            return await getUsersByArrayOfId(data);
        }
    }
}