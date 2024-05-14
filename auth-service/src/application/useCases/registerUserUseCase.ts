import { IDependencies } from "@/application/interfaces/IDependencies";
import { LoginCredential } from "@/domain/entities";

export const registerUserUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { create }
    } = dependencies;

    return {
        execute: async (email: string,password:string) => {
            try {
                const data:LoginCredential ={
                    email,
                    password
                }
                return await create(data);
                
            } catch (error: any) {
                throw new Error(error.message || "User creation failed");
            }
        }
    }
}