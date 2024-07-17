import { updateAccountTypeService } from "@/infrastructure/services/updateAccountTypeService";

export default async (
    data:any 
) => {
    try {
        console.log("==========");
        console.log(typeof data);
        console.log(data);
        console.log("==========");
        const newData={
            userId:data.userId,
            accountType:data.accountType
        }
        await updateAccountTypeService(newData)
    } catch (error: any) {
        console.log("user-created-consumed mail send error: ", error?.message);
    }

}