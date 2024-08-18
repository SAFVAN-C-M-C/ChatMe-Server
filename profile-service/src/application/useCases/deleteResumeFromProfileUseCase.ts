import { IDependencies } from "@/application/interfaces/IDependencies";
import {  DeleteResume } from "@/domain/entities";

export const deleteResumeFromProfileUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { deleteResumeFromProfile }
    } = dependencies;

    return {
        execute: async (data:DeleteResume) => {
            return await deleteResumeFromProfile(data);
        }
    }
}