import { IUserProfile } from "@/domain/entities";
import { RecruiterApplication } from "../entities/RecruiterApplication";

export interface IAapplyRecruiterUseCase {
    execute(data: RecruiterApplication): Promise<IUserProfile | null>;
}