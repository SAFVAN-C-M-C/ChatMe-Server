import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education, Experience } from "@/domain/entities";

export const addExperienceUsecase = (dependencies: IDependencies) => {
    const {
        repositories: { addExperience }
    } = dependencies;

    return {
        execute: async (data: Experience) => {
            return await addExperience(data);
        }
    }
}