import { IDependencies } from "@/application/interfaces/IDependencies"
import { createJobController } from "./createJob"
import { getJobsController } from "./getJobs"
import { getJobDetailsController } from "./getJobDetails"
import { editJobController } from "./editJob"
import { deleteJobController } from "./deleteJob"
import { serachJobController } from "./serachJob"
import { getJobsByUserIdController } from "./getJobsByUserId"
import { getJobChartDataController } from "./getJobChartData"
import { applyForJobController } from "./applyForJob"
import { getJobApplicationsController } from "./getJobApplications"
import { updateApplicationStatusController } from "./updateApplicationStatus"
import { getMyJobApplicationsController } from "./getMyJobApplications"

export const controllers = (dependencies: IDependencies) => {
    return{
        createJob:createJobController(dependencies),
        getJobs:getJobsController(dependencies),
        getJobDetails:getJobDetailsController(dependencies),
        editJob:editJobController(dependencies),
        deleteJob:deleteJobController(dependencies),
        serachJob:serachJobController(dependencies),
        getJobsByUserId:getJobsByUserIdController(dependencies),
        getJobChartData:getJobChartDataController(dependencies),
        applyForJob:applyForJobController(dependencies),
        getJobApplications:getJobApplicationsController(dependencies),
        updateApplicationStatus:updateApplicationStatusController(dependencies),
        getMyJobApplications:getMyJobApplicationsController(dependencies),
    }
}