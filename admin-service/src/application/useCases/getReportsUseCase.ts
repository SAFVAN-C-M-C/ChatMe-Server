import { IDependencies } from "@/application/interfaces/IDependencies";

export const getReportsUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getReports }
    } = dependencies;

    return {
        execute: async () => {
            return await getReports();
        }
    }
}