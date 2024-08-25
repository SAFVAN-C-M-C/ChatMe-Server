import { IOtp, LoginCredential, UserEntity } from "@/domain/entities";
import { RegisterDetails } from "@/domain/entities/RegisterDetails";

export interface IRepositories {
  create: (data: LoginCredential) => Promise<UserEntity | null>;
  addRegisterDetails: (data: RegisterDetails) => Promise<UserEntity | null>;
  findByEmail: (email?: string, google?: boolean) => Promise<UserEntity | null>;
  findById: (id: string) => Promise<UserEntity | null>;
  verifyOtp: (email: string, otp: string) => Promise<Boolean | null>;
  updateUserPassword: (data: {
    email: string;
    password: string;
  }) => Promise<UserEntity | null>;
  updateUserField: (
    email: string,
    feild: string,
    value: boolean
  ) => Promise<UserEntity | null>;
}
