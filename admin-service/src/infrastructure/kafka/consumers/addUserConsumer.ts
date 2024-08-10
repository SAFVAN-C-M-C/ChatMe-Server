    import { addCompanyService, addUserService } from "@/infrastructure/services";

    export default async (
        data:any 
    ) => {


        try {
            console.log("==========");
            console.log(typeof data);
            console.log(data);
            console.log("==========");
            const newData:any={
                name:data.name,
                email:data.email,
                userId:data.userId,
            }
            if(data.accountType==="company"){
                newData.doc=data?.doc
                await addCompanyService(newData)
            }
            if(data.accountType==="personal"){
                await addUserService(newData)
            }

            console.log("===============userProfileCreated==============");

        } catch (error: any) {
            console.log("user-created-consumed mail send error: ", error?.message);
        }

    }