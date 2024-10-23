import express, {
  Application,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import proxy from "express-http-proxy";
import { corsOptions, routes } from "./util";
import { config } from "dotenv";
config();


//application
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5555;




//middlewares
app.use(cors(corsOptions));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());
app.use(morgan("dev"));
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: `Hello welocome to ChatMe gateway` });
});


//proxy setup
routes.forEach((route) => {
  if (typeof route.target === "string") {
    console.log(route.context, route.target);
    
    app.use(route.context, proxy(route.target));
  } else {
    console.warn(`Proxy target for ${route.context} is undefined.`);
  }
});

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
