import { IDependencies } from "@/application/interfaces/IDependencies";
import { CreateMessageData, GetChatByUserId } from "@/domain/entities/Chat";
import { Request, Response, NextFunction } from "express";

export const createMessageController = (dependencies: IDependencies) => {
  const {
    useCases: { createMessageUseCase,getChatByChatIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.body?.message && !req.body.media) {
        throw new Error("message not provided");
      }
      if (!req.body?.receiverId) {
        throw new Error("receiverId not provided");
      }
      if (!req.body?.chatId) {
        throw new Error("chatId not provided");
      }
      const data:CreateMessageData={
        chatId:String(req.body?.chatId),
        message:String(req.body?.message),
        media:String(req.body?.media),
        type:String(req.body?.type),
        receiverId:String(req.body?.receiverId),
        senderId:String(req.user._id)
      }
      let resultedChat = await createMessageUseCase(dependencies).execute(data);
      if(!resultedChat){
        throw new Error("Something went wrong")
      }
      // socket
      
      let result= await getChatByChatIdUseCase(dependencies).execute(String(data.chatId))
      res.status(200).json({
        success: true,
        data: resultedChat,
        message: "Message Created",
      });
    } catch (error) {
      next(error);
    }
  };
};
