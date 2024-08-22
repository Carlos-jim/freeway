import {pool} from '../../db.js'

export const createReservation = async(reservation) =>{
    const {flight_id, firts_name, last_name,phone_number, cedula, status} = reservation;
    const [insert_database] = await pool.query('INSERT INTO reservations(flight_id, firts_name, last_name,phone_number, cedula, status) VALUES (?,?,?,?,?,?)', [flight_id, firts_name, last_name,phone_number, cedula, status])
    return insert_database;
}