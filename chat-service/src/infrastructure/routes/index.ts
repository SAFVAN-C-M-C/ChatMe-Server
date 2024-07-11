import { Router } from "express";
import { controllers } from "@/presentation/controller";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";

export const routes = (dependencies: IDependencies) => {
  const {
    getChatByUserId,getMyChats,getChatByChatId
  } = controllers(dependencies);

  const router = Router();


  //
  router.route('/').get(jwtMiddleware,getMyChats)
  router.route('/search/:receiverId').get(jwtMiddleware,getChatByUserId)
  router.route('/:chatId').get(jwtMiddleware,getChatByChatId)

  return router;
};
