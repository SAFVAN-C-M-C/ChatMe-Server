import { IDependencies } from "@/application/interfaces/IDependencies"
import { getUserProfileController } from "./getUserProfile"
import { applyRecruiterController } from "./recruiterApplication"
import { updateAvatarController } from "./updateAvatar"
import { updateBioController } from "./updateBio"
import { updateAboutController } from "./updateAbout"
import { addEducationController } from "./addEducation"
import { addExperienceController } from "./addExperience"
import { addSkillsController } from "./addSkills"
import { addPreferedJobsController } from "./addPreferedJobs"
import { acceptRecruiterController } from "./acceptRecruiter"
import { ignoreRecruiterController } from "./ignoreRecruiter"
import { getSearchedUserController } from "./getSearchedUser"
import { getUserProfileByIdController } from "./getUserProfileById"
import { followUserController } from "./followUser"
import { unFollowUserController } from "./unFollowUser"
import { getUserDetailsByUserIdController } from "./getUserDetailsByUserId"
import { changeTheamController } from "./changeTheme"
import { getDataForChartController } from "./getDataForChart"
import { getUserSuggestionsController } from "./getUserSuggestions"
import { addResumeToProfileController } from "./addResumeToProfile"
import { deleteResumeFromProfileController } from "./deleteResumeFromProfile"


export const controllers = (dependencies: IDependencies) => {
    return{
        getUserProfile:getUserProfileController(dependencies),
        applyRecruiter:applyRecruiterController(dependencies),
        updateAvatar:updateAvatarController(dependencies),
        updateBio:updateBioController(dependencies),
        updateAbout:updateAboutController(dependencies),
        addEducation:addEducationController(dependencies),
        addExperience:addExperienceController(dependencies),
        addSkills:addSkillsController(dependencies),
        addPreferedJobs:addPreferedJobsController(dependencies),
        acceptRecruiter:acceptRecruiterController(dependencies),
        ignoreRecruiter:ignoreRecruiterController(dependencies),
        getSearchedUser:getSearchedUserController(dependencies),
        getUserProfileById:getUserProfileByIdController(dependencies),
        followUser:followUserController(dependencies),
        unFollowUser:unFollowUserController(dependencies),
        getUserDetailsByUserId:getUserDetailsByUserIdController(dependencies),
        changeTheam:changeTheamController(dependencies),
        getDataForChart:getDataForChartController(dependencies),
        getUserSuggestions:getUserSuggestionsController(dependencies),
        addResumeToProfile:addResumeToProfileController(dependencies),
        deleteResumeFromProfile:deleteResumeFromProfileController(dependencies),
    }
}