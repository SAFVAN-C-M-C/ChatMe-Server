import { IDependencies } from "@/application/interfaces/IDependencies";

export const getCompaniesUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getCompanies }
    } = dependencies;

    return {
        execute: async () => {
            return await getCompanies();
        }
    }
}