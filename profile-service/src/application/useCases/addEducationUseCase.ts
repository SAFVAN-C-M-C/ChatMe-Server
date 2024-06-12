import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education } from "@/domain/entities";

export const addEducationUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { addEducation }
    } = dependencies;

    return {
        execute: async (data: Education) => {
            return await addEducation(data);
        }
    }
}