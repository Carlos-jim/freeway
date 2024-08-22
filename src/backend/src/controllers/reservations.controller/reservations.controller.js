import { createReservation } from "../../models/reservations.model/reservations.model.js";
import { validationResult } from "express-validator";

export const createReservationController = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {flight_id, first_name, last_name, phone_number, cedula, status} = req.body;

        const insert_data = await createReservation({flight_id, first_name, last_name, phone_number, cedula, status});

        res.status(201).json({ message: 'Reserva registrada exitosamente', reservaId: insert_data.insertId });
    } catch (error) {
        console.error("Error en el servidor:", error);  // Agregar console.log para ver el error.
        res.status(500).json({ error: "Error en el servidor" });
    }
}
