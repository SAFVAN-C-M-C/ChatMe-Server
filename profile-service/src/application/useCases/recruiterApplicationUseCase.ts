import { IDependencies } from "@/application/interfaces/IDependencies";
import { RecruiterApplication } from "@/domain/entities/RecruiterApplication";
import { findByEmail } from "@/infrastructure/database/mongodb/repositories/findByEmail";

export const recruiterApplicationUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { recruiterApplication }
    } = dependencies;

    return {
        execute: async (data: RecruiterApplication) => {
            return await recruiterApplication(data);
        }
    }
}