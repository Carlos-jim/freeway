import { Router } from 'express';
import { check } from 'express-validator';
import {registerFlightController} from '../../controllers/flightRegister.controller/flightRegister.controller.js'


const router = Router();

router.post('/register-flight', [
    check('airline_id','El formato debe ser tipo numerico').isNumeric(),
    check('flight_number', 'El formato debe ser tipo string').isString(),
    check('flight_cost', 'El formato debe ser tipo numero').isNumeric(),
    check('departure_airport', 'El formato debe ser tipo string').isString(),
    check('arrival_airport', 'El formato debe ser tipo string').isString(),
    check('departure_time', 'El formato debe ser tipo fecha').isDate(),
    check('arrival_time', 'El formato debe ser tipo fecha').isDate(),
], registerFlightController)


export default router;