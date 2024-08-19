import {pool} from '../../db.js'


export const registerFlight = async (flight) => {
    const { airline_id, flight_cost,flight_number, departure_airport, arrival_airport, departure_time, arrival_time } = flight;
    const [insert_database] = await pool.query(
        'INSERT INTO flights(airline_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time) VALUES (?,?,?,?,?,?,?)',
        [airline_id, flight_cost, flight_number, departure_airport, arrival_airport, departure_time, arrival_time]
    );
    return insert_database;
};
