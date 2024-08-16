import {pool} from '../../db.js'
import bcrypt from 'bcryptjs'


export const createPassengerUser = async (user) => {
    const {first_name, last_name, email, phone_number, password_hash} = user
    const hashPass = await bcrypt.hash(password_hash,10)
    const [insert_database] = await pool.query('INSERT INTO passengers(first_name, last_name, email, phone_number, password_hash) VALUES (?,?,?,?,?)', [first_name, last_name, email, phone_number, hashPass])
    return insert_database;
}