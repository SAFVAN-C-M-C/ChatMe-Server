import { IDependencies } from "@/application/interfaces/IDependencies";
import { GetChatByUserId } from "@/domain/entities/Chat";
import { Request, Response, NextFunction } from "express";

export const getChatByUserIdController = (dependencies: IDependencies) => {
  const {
    useCases: { getChatByUserIdUseCase, createChatUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new Error("Authentication required: No user provided.");
      }
      if (!req.params.receiverId) {
        throw new Error("receiverId not provided");
      }
      const data: GetChatByUserId = {
        receiverId: String(req.params.receiverId),
        senderId: String(req.user._id),
      };
      let resultedChat = await getChatByUserIdUseCase(dependencies).execute(data);

      if (!resultedChat) {
        resultedChat= await createChatUseCase(dependencies).execute(data)
      }

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
