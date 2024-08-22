import { Router } from 'express';
import { check } from 'express-validator';
import { createPassengerUserController } from '../../controllers/passengerRegister/passengerRegister.controller.js';


const router = Router();

router.post('/register', [
    check('email', 'El formato debe ser tipo correo email@email.com').isEmail(),
    check('password_hash', 'Debe contar con al menor 4 caracteres').isLength({ min: 4 }),
    check('rol', 'El formato debe ser tipo string').isString()
], createPassengerUserController)


export default router;