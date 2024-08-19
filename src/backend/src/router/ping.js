import { Router } from "express";
import { ping } from "../controllers/ping.js";
import { check } from 'express-validator';


const router = Router()


router.get('/ping', ping)


export default router