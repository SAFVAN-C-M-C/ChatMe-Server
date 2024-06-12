import { IDependencies } from "@/application/interfaces/IDependencies";

export const getCompanyRequestUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getCompanyRequest }
    } = dependencies;

    return {
        execute: async () => {
            return await getCompanyRequest();
        }
    }
}