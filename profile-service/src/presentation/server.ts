import express, {
  Application,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { routes } from "@/infrastructure/routes";
import { dependencies } from "@/_boot/dependencies";
import { errorHandler } from "@/_lib/common/error";
import cors from 'cors';
dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 1237;

//middleware
app.use(
  cors({
    origin: ["https://chat-me-delta.vercel.app/","https://chat-me-server-chat.onrender.com","http://localhost:5173/","https://chatme.safvancmc.in/"],
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
// app.use("/api/profile", routes(dependencies));
//local
app.use("/", routes(dependencies));
app.use("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ success: false, status: 404, message: "Api Not found" });
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`connected to profile service defaultly at ${PORT}`);
});

export default app;
