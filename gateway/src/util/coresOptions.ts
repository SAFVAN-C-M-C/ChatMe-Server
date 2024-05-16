const allowedOrigins = [String(process.env.CLIENT_URL)];
export const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
