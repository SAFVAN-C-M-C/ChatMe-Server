import { config } from "dotenv";
config();
const services = {
  auth: process.env.AUTH_SERVICE,
  profile: process.env.PROFILE_SERVICE,
  notification: process.env.NOTIFICATION_SERVICE,
  admin: process.env.ADMIN_SERVICE,
  post:process.env.POST_SERVICE,
  chat:process.env.CHAT_SERVICE,
  job:process.env.JOB_SERVICE
};
export default services;
