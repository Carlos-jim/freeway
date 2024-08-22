import {pool} from '../../db.js'
import bcrypt from 'bcryptjs'


export const createPassengerUser = async (user) => {
    const {email, password_hash, rol} = user
    const hashPass = await bcrypt.hash(password_hash,10)
    const [insert_database] = await pool.query('INSERT INTO passengers(email,password_hash, rol) VALUES (?,?,?)', [email, hashPass,rol])
    return insert_database;
}