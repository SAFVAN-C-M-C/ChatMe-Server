import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notificationRoutes } from "@/infrastructure/routes";
import { dependencies } from "@/_boot/dependencies";
import { app, server } from "@/infrastructure/socket";
import cors from 'cors';
dotenv.config();


const PORT:number=Number(process.env.PORT)||1236
app.use(
  cors({
    origin: ["https://chat-me-delta.vercel.app/","https://chat-me-server-chat.onrender.com","http://localhost:5173/","https://chatme.safvancmc.in/"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use('/api/notification', notificationRoutes(dependencies));
//local
app.use("/", notificationRoutes(dependencies));
server.listen(PORT, () => {
    console.log(`connected to notification service at ${PORT}`);
  });

export default app;