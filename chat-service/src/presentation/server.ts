import express,{ Application, Request, Response, json, urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { dependencies } from "@/_boot/dependencies";
import { routes } from "@/infrastructure/routes";
import { errorHandler } from "@/_lib/common/error";
import http from "http";
import cors from 'cors';
import connectSocketIo from "@/infrastructure/socket";
dotenv.config()



const app:Application=express();
const PORT:number=Number(process.env.PORT)||1239


const server = http.createServer(app);
app.use(
  cors({
    origin: ["https://chat-me-delta.vercel.app/","http://localhost:5173/","https://chatme.safvancmc.in/"],
    credentials: true,
  })
);
connectSocketIo(server)
//middleware
app.use(json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())





// app.use("/api/chat",routes(dependencies))
//local
app.use("/", routes(dependencies));
app.use("*",(req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "Api Not found" });
  });  
app.use(errorHandler);
server.listen(PORT,()=>{
    console.log(`connected to chat service defaultly at ${PORT}`);
})

export default app  