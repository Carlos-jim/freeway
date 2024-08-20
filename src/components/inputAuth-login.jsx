import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  // Para redirigir
import gmail from "../public/google.png";
import api from "../api/api.js";  // Asegúrate de que esta es la ruta correcta de tu API
import { jwtDecode } from 'jwt-decode';

const InputAuthLogin = () => {
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
          navigate('/');
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
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 gap-4"
      aria-labelledby="login-form-title"
      onSubmit={handleSubmit}  // Vinculamos la función handleSubmit al formulario
    >
      <div className="mb-4 col-span-2">
        <motion.label
          id="login-form-title"
          className="block text-gray-800 text-sm font-bold mb-2 text-center mb-9"
          style={{ color: "#6147FF" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Accede al sistema
        </motion.label>
      </div>
      <Input
        label="Correo electrónico"
        id="email"
        name="email"
        type="email"
        placeholder="tuUsuario@freewayairlines.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}  // Actualizamos el estado del correo
        className="col-span-2"
      />
      <Input
        label="Contraseña"
        id="password"
        name="password_hash"
        type="password"
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}  // Actualizamos el estado de la contraseña
        className="col-span-2"
      />

      <div className="flex items-center justify-center col-span-2">
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

      <div className="flex items-center justify-center mb-4 p-2 bg-[#EEEEEE] rounded-lg cursor-pointer mt-4 col-span-2">
        <img src={gmail} alt="Google" className="w-6 h-6 object-contain" />
        <span className="text-gray-700 ml-2 font-semibold">GOOGLE</span>
      </div>
    </motion.form>
  );
};

const Input = ({ label, id, name, type, placeholder, value, onChange, className }) => (
  <div className={`mb-4 ${className}`}>
    <motion.label
      htmlFor={id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {label}
    </motion.label>
    <motion.input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    />
  </div>
);

export default InputAuthLogin;
