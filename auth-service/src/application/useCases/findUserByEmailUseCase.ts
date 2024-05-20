import { IDependencies } from "@/application/interfaces/IDependencies";

export const findUserByEmailUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { findByEmail }
    } = dependencies;

    return {
        execute: async (email: string,google:boolean=false) => {
            return await findByEmail(email,google);
        }
    }
}