import { createPassengerUser } from "../../models/passengerRegister/passengerRegister.model.js";
import { validationResult } from "express-validator";


export const createPassengerUserController = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {email, password_hash, rol} = req.body

        const insert_data = await createPassengerUser({email, password_hash, rol})

        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: insert_data.insertId });
    } catch (error) {
        res.status(500).json({ error: "Error"});
    }
}
