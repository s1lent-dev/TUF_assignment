import mysql from "mysql2";
import { HOST, DB_NAME, USER, PASS } from "../constants/constants.js";
import fs from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
// Get the directory name and file name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB_NAME,
}).promise();
async function connectDB() {
    try {
        const path = join(__dirname, '../models/schema.sql');
        const sqlQuery = await fs.readFile(path, 'utf8');
        const connection = await pool.getConnection();
        await connection.query(sqlQuery);
        console.log('Database connection established');
        connection.release();
    }
    catch (error) {
        console.error('Error establishing database connection:', error);
    }
}
export { connectDB, pool };
