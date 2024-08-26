import { findUserByEmail } from '../../models/login.model/login.model.js';
import bcrypt from 'bcryptjs';
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken"

export const findUserByEmailController = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password_hash } = req.body;
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const isMatch = await bcrypt.compare(password_hash, user.password_hash);

        if (!isMatch) {
            return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
        }

        const token = jwt.sign({ userId: user.id, email: user.email, rol: user.rol }, 'tu_secreto_jwt', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
};