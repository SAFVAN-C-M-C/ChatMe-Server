import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notificationRoutes } from "@/infrastructure/routes";
import { dependencies } from "@/_boot/dependencies";
import { app, server } from "@/infrastructure/socket";
dotenv.config();


const PORT: number = Number(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/hello', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Notification service ON!"
    })
});

app.use('/', notificationRoutes(dependencies));

server.listen(PORT, () => {
    console.log(`connected to notification service at ${PORT}`);
  });

export default app;