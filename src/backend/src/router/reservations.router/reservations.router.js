import {createReservationController, getAllReservationsController} from "../../controllers/reservations.controller/reservations.controller.js"
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router();

router.post('/reservation',[
    check('flight_id').isString(),
    check('first_name', 'El formato debe ser tipo string').isString(),
    check('last_name', 'El formato debe ser tipo string').isString(),
    check('phone_number', 'El formato debe ser tipo numerico').isNumeric(),
    check('cedula', 'El formato debe ser tipo string').isString(),
    check('status', 'El formato debe ser tipo string').isString(),
], createReservationController)

router.get('/get-reservations', getAllReservationsController)

export default router;