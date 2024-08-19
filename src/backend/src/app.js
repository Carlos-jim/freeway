import express from 'express';
import cors from 'cors'; // Importa cors
import {PORT_FRONTEND} from '../config/config.js'
import pong from './router/ping.js'
import createPassenger from './router/passengerRegister/passengerRegister.router.js'
import createFlight from './router/registerFlight.router/registerFlight.router.js'
import getFlights from './router/getFlight.router/getFlight.router.js'
const app = express();

// Configuración básica de CORS
app.use(cors({
  origin: `http://localhost:${PORT_FRONTEND}`, // Cambia esto a la URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api', createPassenger)
app.use('/api', createFlight)
app.use('/api', getFlights)
app.use(pong)


app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;