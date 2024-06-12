import { Education, IUserProfile } from "@/domain/entities";

export interface IAddEducationUseCase {
    execute(data: Education): Promise<IUserProfile | null>;
}