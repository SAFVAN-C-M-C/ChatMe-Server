import express,{ Application, Request, Response, json, urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
dotenv.config()



const app:Application=express();
const PORT:number=Number(process.env.PORT)||1237

//middleware
app.use(json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())
app.use("*",(req: Request, res: Response) => {
    res.status(404).json({ success: false, status: 404, message: "Api Not found" });
  });  

app.listen(PORT,()=>{
    console.log(`connected to profile service defaultly at ${PORT}`);
})

export default app