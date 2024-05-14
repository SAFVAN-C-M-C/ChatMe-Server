import { IOtp, UserEntity } from "@/domain/entities";

export interface ICreateOTP {
    execute(email: string): Promise<IOtp | null>;
}