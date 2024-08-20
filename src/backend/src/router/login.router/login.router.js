import { Router } from 'express';
import { findUserByEmailController } from '../../controllers/login.controller/login.controller.js';

const router = Router();

router.get('/login', findUserByEmailController);

export default router;