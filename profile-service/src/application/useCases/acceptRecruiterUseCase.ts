import { IDependencies } from "@/application/interfaces/IDependencies";
import { AcceptRequest } from "@/domain/entities/RecruiterApplication";

export const acceptRecruiterUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { acceptRecruiter }
    } = dependencies;

    return {
        execute: async (data: AcceptRequest) => {
            return await acceptRecruiter(data);
        }
    }
}