import { IUserProfile } from "@/domain/entities";
import { BioDetails } from "../entities/BioDetails";

export interface IUpdateBioUseCase {
    execute(data: BioDetails): Promise<IUserProfile | null>;
}