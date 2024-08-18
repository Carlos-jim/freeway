import axios from 'axios';
import { PORT } from '../../backend/config/config.js';

const api = axios.create({
  baseURL: `http://localhost:${PORT}/api`, 
});

export default api;