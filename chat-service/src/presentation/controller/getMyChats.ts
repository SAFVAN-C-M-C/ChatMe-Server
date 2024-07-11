import { IDependencies } from "@/application/interfaces/IDependencies";
import { GetChatByUserId } from "@/domain/entities/Chat";
import { Request, Response, NextFunction } from "express";

export const getMyChatsController = (dependencies: IDependencies) => {
  const {
    useCases: { getMyChatsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }

      let resultedChat = await getMyChatsUseCase(dependencies).execute(String(req.user._id));


      res.status(200).json({
        success: true,
        data: resultedChat,
        message: "Chats Fetched",
      });
    } catch (error) {
      next(error);
    }
  };
};
