// import { sendVerificationMail } from "@/infrastructure/services";

import { addUserService } from "@/infrastructure/services";

export default async (
    data:any 
) => {

    try {
        console.log("==========");
        console.log(typeof data);
        console.log(data);
        console.log("==========");
        
        await addUserService(data.email,data.userId)
        console.log("===============userProfileCreated==============");

    } catch (error: any) {
        console.log("user-created-consumed mail send error: ", error?.message);
    }

}