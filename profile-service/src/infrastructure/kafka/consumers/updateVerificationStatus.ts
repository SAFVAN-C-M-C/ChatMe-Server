// import { sendVerificationMail } from "@/infrastructure/services";

import { IUserProfile } from "@/domain/entities";
import { updateVerificationService } from "@/infrastructure/services";

export default async (
    data:any 
) => {
    try {
        console.log("==========");
        console.log(typeof data);
        console.log(data);
        console.log("==========");
        const newData={
            email:data.email,
            isVerified:data.isVerified
        }
        await updateVerificationService(newData)
    } catch (error: any) {
        console.log("user-created-consumed mail send error: ", error?.message);
    }

}