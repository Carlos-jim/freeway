import { pool } from "../../db.js";

const getAllFlight = async() =>{
    const [allrows] = await pool.query('SELECT * FROM flights')
    return allrows;
}


export default getAllFlight