import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
const SERVER_PORT = process.env.SERVER_PORT || 8712;
const DB_NAME = process.env.DB_NAME || "test";
const HOST = process.env.HOST || "localhost";
const USER = process.env.USER || "root";
const PASS = process.env.PASS;
export { PORT, SERVER_PORT, DB_NAME, HOST, USER, PASS };
