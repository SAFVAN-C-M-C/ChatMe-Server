import { config } from "dotenv";
config()
const allowedOrigins = [String(process.env.CLIENT_URL)];
export const corsOptions = {
  origin: (origin:any, callback:any) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
