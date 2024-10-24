import { createServer } from "http";
import express, { Application } from "express";
const app: Application = express();
import { Server as NotificationServer, Socket } from "socket.io";
import { setRead } from "../services";
import dotenv from "dotenv";
dotenv.config();
const server = createServer(app);
//production
// const io = new NotificationServer(server, {
//   path: "/notification/socket.io",
//   cors: {
//     origin: ["https://chat-me-delta.vercel.app","http://localhost:5173"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   }
// });
const io = new NotificationServer(server, {
  cors: {
    origin: ["https://chat-me-delta.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const userSocketMap: { [key: string]: string } = {};
export const getReceiverSocketId = (recieverId: string): string | undefined => {
  return userSocketMap[recieverId];
};
io.on("connection", (socket: Socket) => {
  
  const userId: string = socket.handshake.query.userId as string;
  if (userId) {
    userSocketMap[userId] = socket.id;
    //last seen setting here
  } else {
    console.warn("User ID is missing in handshake query");
  }
  //.emit will send a even .on will listen a event
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("notificationSeen", async ({ notificationId, receiverId }) => {

    try {
      const message = await setRead(String(notificationId));


      const receiverSocketId = getReceiverSocketId(String(receiverId));
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("notificationSeen", { notificationId });
      }
    } catch (error: any) {
      console.warn("Error marking message as:", error.message);
    }
  });
  socket.on("disconnect", () => {
    console.warn("User is disconnectd", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
