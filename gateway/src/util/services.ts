import { config } from "dotenv";
config();
const services = {
  auth: process.env.AUTH_SERVICE,
  profile: process.env.PROFILE_SERVICE,
  notification: process.env.NOTIFICATION_SERVICE,
  admin: process.env.ADMIN_SERVICE,
};
export default services;
