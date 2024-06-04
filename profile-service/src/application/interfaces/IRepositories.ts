import { IUserProfile } from "@/domain/entities";

export interface IRepositories {
  findById: (id: string) => Promise<IUserProfile | null>;
}
