import { pool } from "../../db.js";

export const findUserByEmail = async(email) =>{
    const [rows] = await pool.query('SELECT * FROM passengers WHERE email = ?', [email]);
    return rows[0];
}