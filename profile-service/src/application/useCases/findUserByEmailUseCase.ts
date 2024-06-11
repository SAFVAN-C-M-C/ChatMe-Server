import { IDependencies } from "@/application/interfaces/IDependencies";
import { findByEmail } from "@/infrastructure/database/mongodb/repositories/findByEmail";

export const findUserByEmailUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { findByEmail }
    } = dependencies;

    return {
        execute: async (email?: string) => {
            return await findByEmail(email);
        }
    }
}