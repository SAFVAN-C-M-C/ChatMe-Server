import { Education, IUserProfile } from "@/domain/entities";
import { AcceptRequest } from "../entities/RecruiterApplication";

export interface IAcceptRecruiterUseCase {
    execute(data: AcceptRequest): Promise<IUserProfile | null>;
}