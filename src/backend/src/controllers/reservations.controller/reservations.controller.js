import { createReservation, getAllReservations, putStatusReservation } from "../../models/reservations.model/reservations.model.js";
import { validationResult } from "express-validator";

export const createReservationController = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {flight_id, user_id,first_name, last_name, phone_number, cedula, status, confirmation} = req.body;

        const insert_data = await createReservation({flight_id,user_id, first_name, last_name, phone_number, cedula, status, confirmation});

        res.status(201).json({ message: 'Reserva registrada exitosamente', reservaId: insert_data.insertId });
    } catch (error) {
        console.error("Error en el servidor:", error);  // Agregar console.log para ver el error.
        res.status(500).json({ error: "Error en el servidor" });
    }
}

export const getAllReservationsController = async (req, res) => {
    try {
        const reservas = await getAllReservations();
        res.json(reservas);
    } catch (error) {
        console.error('Error al obtener las reservas:', error);
        res.status(500).json({ error: "Error al obtener las reservas" });
    }
 
}


export const putStatusReservationController = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const { status, confirmation } = req.body;

        // Actualizar la reserva en la base de datos
        const update_result = await putStatusReservation(id, { status, confirmation });

        if (update_result.affectedRows === 0) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }

        res.json({ message: 'Reserva actualizada exitosamente' });
    } catch (error) {
        
    }
}