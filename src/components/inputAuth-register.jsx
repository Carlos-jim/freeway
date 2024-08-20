import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import gmail from "../public/google.png";
import api from "../api/api.js";

const InputAuthRegister = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password_hash: "",
    rol:"",
  });

  const [message, setMessage] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register", formData);

      if (response.status === 201) {
        setMessage({ type: "success", text: "Usuario añadido exitosamente!" });
        setFormData({
          first_name: "",
          last_name: "",
          phone_number: "",
          email: "",
          password_hash: "",
          rol:"user",
        });
      } else {
        setMessage({ type: "error", text: response.data.message || "Error añadiendo usuario." });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.message || "Error añadiendo usuario." });
    }
  }, [formData]);

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 gap-4"
      aria-labelledby="login-form-title"
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
        label="Nombre"
        id="first_name"
        name="first_name"
        type="text"
        placeholder="Jose"
        value={formData.first_name}
        onChange={handleChange}
      />
      <Input
        label="Apellido"
        id="last_name"
        name="last_name"
        type="text"
        placeholder="Rodriguez"
        value={formData.last_name}
        onChange={handleChange}
      />
      <Input
        label="Número de teléfono"
        id="phone_number"
        name="phone_number"
        type="text"
        placeholder="0424231131"
        value={formData.phone_number}
        onChange={handleChange}
      />
      <Input
        label="Correo electrónico"
        id="email"
        name="email"
        type="email"
        placeholder="tuUsuario@freewayairlines.com"
        value={formData.email}
        onChange={handleChange}
        className="col-span-2"
      />
      <Input
        label="Contraseña"
        id="password"
        name="password_hash"
        type="password"
        placeholder="contraseña"
        value={formData.password_hash}
        onChange={handleChange}
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

      {message && (
        <div className={`col-span-2 text-center text-${message.type === 'error' ? 'red' : 'green'}-500`}>
          {message.text}
        </div>
      )}

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

export default InputAuthRegister;
