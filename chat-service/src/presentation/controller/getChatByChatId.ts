import { IDependencies } from "@/application/interfaces/IDependencies";
import { GetChatByUserId } from "@/domain/entities/Chat";
import { Request, Response, NextFunction } from "express";

export const getChatByChatIdController = (dependencies: IDependencies) => {
  const {
    useCases: { getChatByChatIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params?.chatId) {
        throw new Error("receiverId not provided");
      }
      let resultedChat = await getChatByChatIdUseCase(dependencies).execute(String(req.params.chatId));

      res.status(200).json({
        success: true,
        data: resultedChat,
        message: "Chat Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};
