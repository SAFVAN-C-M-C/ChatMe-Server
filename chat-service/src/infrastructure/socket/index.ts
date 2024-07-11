
import { IMessage } from "@/domain/entities/Chat";
import { Server } from "http";
import { Server as IOServer ,Socket} from "socket.io";

const connectSocketIo = (server: Server) => {
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
  io.on("connection",(socket:Socket)=>{
    console.log("A user is conncted",socket.id);
    const userId: string = socket.handshake.query.userId as string;
    if (userId) {
        userSocketMap[userId] = socket.id;
        //last seen setting here
      } else {
        console.log("User ID is missing in handshake query");
      }
      //.emit will send a even .on will listen a event
      io.emit("getOnlineUsers", Object.keys(userSocketMap));



      socket.on("newMessage", (newMessage: any) => {
        console.log("🚀 ~ file: index.ts:33 ~ socket.on ~ newMessage:", newMessage)
        const receiverSocketId = getReceiverSocketId(newMessage.obj.receiverId);
        if (receiverSocketId) {
          io.to(receiverSocketId).emit("newMessage", newMessage);
        //   setLastSeen(newMessage.obj.sender, new Date(Date.now()));
        } else {
          console.log("Receiver is offline");
        }
      });

    socket.on("disconnect",()=>{
        console.log("User is disconnectd",socket.id);
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        
    })
  })
};
export default connectSocketIo;
