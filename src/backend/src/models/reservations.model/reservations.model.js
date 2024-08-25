import {pool} from '../../db.js'

export const createReservation = async(reservation) =>{
    const {flight_id, first_name, last_name,phone_number, cedula, status,confirmation} = reservation;
    const [insert_database] = await pool.query('INSERT INTO reservations(flight_id, first_name, last_name,phone_number, cedula, status, confirmation) VALUES (?,?,?,?,?,?,?)', [flight_id, first_name, last_name,phone_number, cedula, status, confirmation])
    return insert_database;
}

export const getAllReservations = async() => {
    const [rows] = await pool.query('SELECT * FROM reservations')
    return rows;
}