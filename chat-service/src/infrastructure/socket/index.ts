import { Server } from "http";
import { Server as IOServer, Socket } from "socket.io";
import { setMessageSeen } from "../database/mongoDB/repositories/setMessageSeen";
import dotenv from "dotenv";
dotenv.config();
const connectSocketIo = (server: Server) => {
//prodction
  // const io = new IOServer(server, {
  //   path: "/chat/socket.io", // Path for the Socket.IO connection
  //   cors: {
  //     origin: ["https://chat-me-delta.vercel.app","http://localhost:5173"], // Allowed origin for CORS
  //     methods: ["GET", "POST"], // Allowed methods
  //     credentials: true, // Allow credentials
  //   }
  // });
  //local
  const io = new IOServer(server, {
    cors: {
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
  const userSocketMap: { [key: string]: string } = {};
  const getReceiverSocketId = (recieverId: string): string | undefined => {
    return userSocketMap[recieverId];
  };
  io.on("connection", (socket: Socket) => {
    const userId: string = socket.handshake.query.userId as string;
    if (userId) {
      userSocketMap[userId] = socket.id;
      //last seen setting here
    } else {
      console.error("User ID is missing in handshake query");
    }
    //.emit will send a even .on will listen a event
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("newMessage", (newMessage: any) => {
      const receiverSocketId = getReceiverSocketId(newMessage.obj.receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", newMessage);
      } else {
        console.warn("Receiver is offline");
      }
    });
    socket.on("messageSeen", async ({ messageId, chatId, receiverId }) => {
      try {
        const message = await setMessageSeen(String(messageId));

        const receiverSocketId = getReceiverSocketId(String(receiverId));
        if (receiverSocketId) {
          io.to(receiverSocketId).emit("messageSeen", { messageId, chatId });
        }
      } catch (error: any) {
        console.error("Error marking message as:", error.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("User is disconnectd", socket.id);
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });
};
export default connectSocketIo;
