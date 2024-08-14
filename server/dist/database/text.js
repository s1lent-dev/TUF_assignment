import mysql from 'mysql2';
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Silent@8712',
    database: 'code_zeniths'
}).promise();
const [rows] = await pool.query("SELECT * FROM banners");
