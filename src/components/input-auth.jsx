import React, { useState } from "react";
import { motion } from "framer-motion";
import gmail from "../public/google.png";
import api from "../api/api.js";

const InputAuth = () => {
  const [FormData, setFormData] = useState({
    firts_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password_hash: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register", FormData);

      if (response.status === 201) {
        setSuccess("Usuario añadido exitosamente!");
        setError(null);
        setFormData({
          firts_name: "",
          last_name: "",
          phone_number: "",
          email: "",
          password_hash: "",
        });
      } else {
        setError(response.data.message || "Error añadiendo usuario.");
        setSuccess(null);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error añadiendo usuario.");
      setSuccess(null);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 gap-4"
    >
      <div className="mb-4 col-span-2">
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
      </div>
      <div className="mb-4">
        <motion.label
          htmlFor="firts_name"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nombre
        </motion.label>
        <motion.input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firts_name"
          name="firts_name"
          type="text"
          placeholder="Jose"
          value={FormData.firts_name}
          onChange={handleChange}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
      <div className="mb-4">
        <motion.label
          htmlFor="last_name"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Apellido
        </motion.label>
        <motion.input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="last_name"
          name="last_name"
          type="text"
          placeholder="Rodriguez"
          value={FormData.last_name}
          onChange={handleChange}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
      <div className="mb-4 col-span-2">
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
          name="email"
          type="email"
          placeholder="tuUsuario@freewayairlines.com"
          value={FormData.email}
          onChange={handleChange}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
      <div className="mb-4">
        <motion.label
          htmlFor="phone_number"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Número de teléfono
        </motion.label>
        <motion.input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone_number"
          name="phone_number"
          type="text"
          placeholder="0424231131"
          value={FormData.phone_number}
          onChange={handleChange}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
      <div className="mb-4">
        <motion.label
          htmlFor="password"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contraseña
        </motion.label>
        <motion.input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="password_hash"
          type="password"
          placeholder="contraseña"
          value={FormData.password_hash}
          onChange={handleChange}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
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
        <img src={gmail} alt="Visa" className="w-6 h-6 object-contain" />
        <span className="text-gray-700 ml-2 font-semibold">GOOGLE</span>
      </div>
    </motion.form>
  );
};

export default InputAuth;
