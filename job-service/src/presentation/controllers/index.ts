import { IDependencies } from "@/application/interfaces/IDependencies"
import { createJobController } from "./createJob"
import { getJobsController } from "./getJobs"
import { getJobDetailsController } from "./getJobDetails"

export const controllers = (dependencies: IDependencies) => {
    return{
        createJob:createJobController(dependencies),
        getJobs:getJobsController(dependencies),
        getJobDetails:getJobDetailsController(dependencies),
    }
}