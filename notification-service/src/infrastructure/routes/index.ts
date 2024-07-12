    import { Router } from "express";
import { jwtMiddleware } from "@/_lib/common";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "@/presentation/controller";


export const notificationRoutes = (dependencies: IDependencies) => {

    const {
        sendVerificationMail,createNewNotification,getNotifications
    } = controllers(dependencies);

    const router = Router();
    router.route("/")
    .get(jwtMiddleware, getNotifications);
    router.route("/email-verification")
        .get(jwtMiddleware, sendVerificationMail);
    router.route("/send")
        .post(jwtMiddleware, createNewNotification);
   
    return router;
}
