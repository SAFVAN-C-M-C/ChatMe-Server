import { IUsers } from "@/domain/entities";

export interface IGetUserUseCase {
    execute(): Promise<IUsers[] | null>;
}