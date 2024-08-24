import { IComapanyRequest, IRecruiterRequest } from "../entities/Requests";

export interface IVerifyRequestUseCase {
  execute(data: {
    email?: string;
    isVerified?: boolean;
    type?: string;
  }): Promise<IRecruiterRequest[] | IComapanyRequest[] | null>;
}
