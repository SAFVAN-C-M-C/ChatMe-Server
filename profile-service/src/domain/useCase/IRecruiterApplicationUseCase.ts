import { IUserProfile } from "@/domain/entities";
import { RecruiterApplication } from "../entities/RecruiterApplication";

export interface IRecruiterApplicationUseCase {
    execute(data: RecruiterApplication): Promise<IUserProfile | null>;
}