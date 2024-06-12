import { IDependencies } from "@/application/interfaces/IDependencies";
import { Education, Experience } from "@/domain/entities";

export const addSkillsUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { addSkills }
    } = dependencies;

    return {
        execute: async (data: {email?:string,skills?:string[]}) => {
            return await addSkills(data);
        }
    }
}