import mysql from "mysql2";
import { HOST, DB_NAME, USER, PASS} from "../constants/constants.js";

const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB_NAME,
}).promise()

async function connectDB() {
    try {
        const connection = await pool.getConnection();
        console.log('Database connection established');
        connection.release();
    } catch (error) {
        console.error('Error establishing database connection:', error);
    }
}

export { connectDB, pool };
