import { IDependencies } from "@/application/interfaces/IDependencies";
import { BioDetails } from "@/domain/entities/BioDetails";

export const updateBioUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateBio }
    } = dependencies;

    return {
        execute: async (data: BioDetails) => {
            return await updateBio(data);
        }
    }
}