import { createReservation } from "../../models/reservations.model/reservations.model";
import { validationResult } from "express-validator";

export const createReservationController = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {flight_id, firts_name, last_name,phone_number, cedula, status} = req.body

        const insert_data = await createReservation({flight_id, firts_name, last_name,phone_number, cedula, status})

        res.status(201).json({ message: 'Reserva registrada exitosamente', reservaId: insert_data.insertId });
    } catch (error) {
        res.status(500).json({ error: "Error"});
    }
}
