import { IUsers } from "@/domain/entities";


export interface IRepositories {
  getUsers: () => Promise<IUsers[] | null>;
}
