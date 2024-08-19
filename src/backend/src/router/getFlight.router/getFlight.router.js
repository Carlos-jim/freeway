import { Router } from 'express';
import { getAllFlightsController } from '../../controllers/getFlight.controller/getFlight.controller.js';

const router = Router();

router.get('/get-flights', getAllFlightsController);

export default router;