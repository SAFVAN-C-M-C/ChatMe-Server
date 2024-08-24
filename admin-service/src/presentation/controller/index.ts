import { IDependencies } from "@/application/interfaces/IDependencies";
import { getUserController } from "./getUserController";
import { getCompaniesController } from "./getCompanies";
import { getCompanyRequestController } from "./getCompanyRequest";
import { getRecruiterRequestController } from "./getRecruiterRequest";
import { verifyRequestController } from "./verifyRequest";
import { blockUserController } from "./blockUser";
import { unBlockUserController } from "./unBlockUser";
import { addReportController } from "./addReport";
import { getReportsController } from "./getReports";
import { reportActionController } from "./reportAction";
import { deleteReportController } from "./deleteReport";

export const controllers = (dependencies: IDependencies) => {
  return {
    getUsers: getUserController(dependencies),
    getCompanies: getCompaniesController(dependencies),
    getCompanyRequest: getCompanyRequestController(dependencies),
    getRecruiterRequest: getRecruiterRequestController(dependencies),
    verifyRequest: verifyRequestController(dependencies),
    blockUser: blockUserController(dependencies),
    unBlockUser: unBlockUserController(dependencies),
    addReport: addReportController(dependencies),
    getReports: getReportsController(dependencies),
    reportAction: reportActionController(dependencies),
    deleteReport: deleteReportController(dependencies),
  };
};
