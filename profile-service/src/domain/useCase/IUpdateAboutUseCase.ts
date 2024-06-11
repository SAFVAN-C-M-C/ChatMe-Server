import { IUserProfile } from "@/domain/entities";
export interface IUpdateAboutUseCase {
  execute(data: {email:string,about:string}): Promise<IUserProfile | null>;
}
