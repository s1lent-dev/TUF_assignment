import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Redis from 'node-cache';
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { bannerRouter } from "./routes/banner.routes.js";
const redis = new Redis();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.use("/api/v1/banner", bannerRouter);

app.use(errorMiddleware);

export { app, redis };