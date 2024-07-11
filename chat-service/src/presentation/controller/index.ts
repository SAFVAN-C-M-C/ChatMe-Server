import { IDependencies } from "@/application/interfaces/IDependencies"
import { getChatByUserIdController } from "./getChatByUserId"
import { getMyChatsController } from "./getMyChats"
import { getChatByChatIdController } from "./getChatByChatId"
import { createMessageController } from "./createMessage"

export const controllers = (dependencies: IDependencies) => {
    return{
        getMyChats:getMyChatsController(dependencies),
        getChatByUserId:getChatByUserIdController(dependencies),
        getChatByChatId:getChatByChatIdController(dependencies),
        createMessage:createMessageController(dependencies),
    }
}