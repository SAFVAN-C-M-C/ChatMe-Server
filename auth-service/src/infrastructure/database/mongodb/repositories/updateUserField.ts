import { User } from "@/infrastructure/database/mongodb/models";
import { UserEntity } from "@/domain/entities";


export const updateUserField = async (
    email:string,
    field:string,
    value:boolean
): Promise<UserEntity | null> => {
    try {

        const existingUser = await User.findOne({email});

        if (!existingUser) {
            throw new Error("User does not exist!");
        }
        existingUser.isEmailVerified=true
existingUser.save()
        return existingUser;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}