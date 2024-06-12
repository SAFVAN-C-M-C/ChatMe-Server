import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education, Experience } from "@/domain/entities";

export const addPreferedJobsUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { addPreferedJobs }
    } = dependencies;

    return {
        execute: async (data: {email?:string,preferedJobs?:string[]}) => {
            return await addPreferedJobs(data);
        }
    }
}