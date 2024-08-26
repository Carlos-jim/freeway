import {createReservationController, getAllReservationsController, putStatusReservationController} from "../../controllers/reservations.controller/reservations.controller.js"
import { Router } from 'express';
import { check } from 'express-validator';

const router = Router();

router.post('/reservation',[
    check('flight_id').isString(),
    check('user_id').isNumeric(),
    check('first_name', 'El formato debe ser tipo string').isString(),
    check('last_name', 'El formato debe ser tipo string').isString(),
    check('phone_number', 'El formato debe ser tipo numerico').isNumeric(),
    check('cedula', 'El formato debe ser tipo string').isString(),
    check('status', 'El formato debe ser tipo string').isString(),
    check('confirmation', "El formato deber ser tipo boolean").isBoolean()
], createReservationController)

router.get('/get-reservations', getAllReservationsController)

router.put('/put-reservation/:id',[
    check('status', 'El formato debe ser tipo string').isString(),
    check('confirmation', 'El formato debe ser tipo booleado').isBoolean()
], putStatusReservationController )

export default router;