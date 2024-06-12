import { IDependencies } from "@/application/interfaces/IDependencies";

export const getRecruiterRequestUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getRecruiterRequest }
    } = dependencies;

    return {
        execute: async () => {
            return await getRecruiterRequest();
        }
    }
}