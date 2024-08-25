import express, {
  Application,
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dependencies } from "@/_boot/dependencies";
import { routes } from "@/infrastructure/routes";
import { errorHandler } from "@/_lib/common/error";
import { jwtMiddleware } from "@/_lib/common/middleware/jwtMiddleware";
dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 1234;
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", routes(dependencies));

app.use("*", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ success: false, status: 404, message: "Api Not found" });
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`connected to auth service defaultly at ${PORT}`);
});

export default app;
