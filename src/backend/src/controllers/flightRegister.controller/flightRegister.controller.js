import { validationResult } from "express-validator";
import { registerFlight } from "../../models/flightRegister.model/flightRegister.model.js";

export const registerFlightController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { airline_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time } = req.body;
        
        const insert_data = await registerFlight({ airline_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time });

        res.status(201).json({ message: 'Vuelo registrado exitosamente', vueloId: insert_data.insertId });
    } catch (error) {
        console.error('Error registrando el vuelo:', error);  // Log the error
        res.status(500).json({ error: "Error al registrar el vuelo" });
    }
};
