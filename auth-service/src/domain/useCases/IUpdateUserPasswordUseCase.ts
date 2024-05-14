import { LoginCredential, UserEntity } from "../entities";

export interface IUpdateUserPasswordUseCase {
  execute(data: LoginCredential): Promise<UserEntity | null>;
}
