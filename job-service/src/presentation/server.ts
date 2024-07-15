import express,{ Application, Request, Response, json, urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { routes } from "@/infrastructure/routes";
import { dependencies } from "@/_boot/dependencies";
import { errorHandler } from "@/_lib/common/error";
dotenv.config()



const app:Application=express();
const PORT:number=Number(process.env.PORT)||1240

//middleware
app.use(json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use("/",routes(dependencies))
app.use("*",(req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "Api Not found" });
  });  
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`connected to job service defaultly at ${PORT}`);
})

export default app