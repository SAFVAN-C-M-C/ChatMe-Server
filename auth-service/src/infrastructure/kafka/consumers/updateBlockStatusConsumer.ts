import { updateBlockStatusService } from "@/infrastructure/services/updateBlockStatusService";


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
            isBlocked:data.isBlocked
        }
        await updateBlockStatusService(newData)
    } catch (error: any) {
        console.log("user-created-consumed mail send error: ", error?.message);
    }

}