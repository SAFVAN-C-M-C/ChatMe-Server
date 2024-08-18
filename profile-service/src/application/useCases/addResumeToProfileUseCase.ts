import { IDependencies } from "@/application/interfaces/IDependencies";
import { AddResume } from "@/domain/entities";

export const addResumeToProfileUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { addResumeToProfile }
    } = dependencies;

    return {
        execute: async (data:AddResume) => {
            return await addResumeToProfile(data);
        }
    }
}