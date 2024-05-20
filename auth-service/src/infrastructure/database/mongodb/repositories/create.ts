import { User } from "@/infrastructure/database/mongodb/models";
import { LoginCredential, UserEntity } from "@/domain/entities";


export const create = async( data:LoginCredential):Promise<UserEntity | null > =>{
    try {
        console.log("here in create",data);
        const newUser = await User.create(data);
        console.log("here in create",newUser);

        if (!newUser) {
            throw new Error("User creation failed!");
        }
        return newUser;
    } catch (error:any) {
        throw new Error(error?.message);
    }
}