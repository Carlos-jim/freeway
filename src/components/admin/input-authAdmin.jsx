import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../../api/api.js"
import { jwtDecode } from 'jwt-decode';


const InputAuthAdmin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizamos la petición a la API de login
      const response = await api.post('/login', {
        email: email,
        password_hash: password
      });

      if (response.status === 200) {
        const { token } = response.data;
        // Guardamos el token en localStorage
        localStorage.setItem('token', token);
        
        // Decodificamos el token para obtener el rol del usuario
        const { rol } = jwtDecode(token);

        // Redirigimos al usuario según su rol
        if (rol === 'admin') {
          navigate('/itinerario-admin');
        } else {
          navigate('/home');
        }
      } else {
        alert("Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <motion.label
          className="block text-gray-800 text-sm font-bold mb-2 text-center mb-9"
          htmlFor="password"
          style={{ color: "#6147FF" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Accede al sistema
        </motion.label>
        <motion.label
          htmlFor="email"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Correo electrónico
        </motion.label>
        <motion.input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="tuUsuario@freewayairlines.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
  
      </div>
      <div className="mb-6">
        <motion.label
          htmlFor="password"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Contraseña
        </motion.label>
        <motion.input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          className="bg-success-color-btn hover:bg-hover-success-color-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          ACCEDER
        </motion.button>
      </div>
    </motion.form>
  );
};

export default InputAuthAdmin;
