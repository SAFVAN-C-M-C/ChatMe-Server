import { UserEntity } from "@/domain/entities";
import { RegisterDetails } from "../entities/RegisterDetails";

export interface IAddRegisterDetailsUseCase {
    execute(data: RegisterDetails): Promise<UserEntity | null>;
}