import services from "./services";

export const routes = [
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
    {
      context: "/api/post",
      target: services.post,
      changeOrigin: true,
    },
  ];