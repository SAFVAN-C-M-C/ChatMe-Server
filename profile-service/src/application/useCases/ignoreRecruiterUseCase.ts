import { IDependencies } from "@/application/interfaces/IDependencies";
import { AcceptRequest } from "@/domain/entities/RecruiterApplication";

export const ignoreRecruiterUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { ignoreRecruiter }
    } = dependencies;

    return {
        execute: async (data: AcceptRequest) => {
            return await ignoreRecruiter(data);
        }
    }
}