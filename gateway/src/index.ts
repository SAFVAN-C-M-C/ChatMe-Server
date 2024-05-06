import cookieParser from "cookie-parser";
import express, { Application, Request, Response, json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import services from "./util/services";
import proxy from "express-http-proxy";

const app: Application = express();
const PORT:number=Number(process.env.PORT)||5555
//middlewares
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:`Hello welocome to ChatMe gateway`})
})
const routes = [
  {
    context: "/api/auth",
    target: services.auth,
    changeOrigin: true,
  },
  {
    context: "/api/profile",
    target: services.profile,
    changeOrigin: true,
  },
  {
    context: "/api/notification",
    target: services.notification,
    changeOrigin: true,
  },
  {
    context: "/api/admin",
    target: services.admin,
    changeOrigin: true,
  },
];


//proxy setup
routes.forEach((route)=>{
    if(typeof route.target==="string"){
        app.use(route.context,proxy(route.target))
    }else{
        console.warn(`Proxy target for ${route.context} is undefined.`);
    }
})


app.listen(PORT, () => {
    console.log(`
  ______  __    __       ___   .___________.   .___  ___.  _______ 
 /      ||  |  |  |     /   \\  |           |   |   \\/   | |   ____|
|  ,----'|  |__|  |    /  ^  \\ \`---|  |----\`   |  \\  /  | |  |__   
|  |     |   __   |   /  /_\\  \\    |  |        |  |\\/|  | |   __|  
|  \`----.|  |  |  |  /  _____  \\   |  |        |  |  |  | |  |____ 
 \\______||__|  |__| /__/     \\__\\  |__|        |__|  |__| |_______|
                                                                    
`);

  
    console.log(
      `[ SERVICE :: API GATEWAY ] API Gateway is listening on http://localhost:${PORT}`
    );
  });
