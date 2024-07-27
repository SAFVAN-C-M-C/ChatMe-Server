import { IDependencies } from "@/application/interfaces/IDependencies"
import { createJobController } from "./createJob"
import { getJobsController } from "./getJobs"
import { getJobDetailsController } from "./getJobDetails"
import { editJobController } from "./editJob"
import { deleteJobController } from "./deleteJob"
import { serachJobController } from "./serachJob"
import { getJobsByUserIdController } from "./getJobsByUserId"

export const controllers = (dependencies: IDependencies) => {
    return{
        createJob:createJobController(dependencies),
        getJobs:getJobsController(dependencies),
        getJobDetails:getJobDetailsController(dependencies),
        editJob:editJobController(dependencies),
        deleteJob:deleteJobController(dependencies),
        serachJob:serachJobController(dependencies),
        getJobsByUserId:getJobsByUserIdController(dependencies),
    }
}