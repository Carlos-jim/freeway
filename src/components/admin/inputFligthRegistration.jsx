import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Tooltips from "../../components/tooltip";
import options from "../../.json/options-select.json";
import api from "../../api/api.js";

const InputFligthRegister = () => {
  const [formData, setFormData] = useState({
    flight_number: "",
    departure_airport: "",
    arrival_airport: "",
    departure_time: "",
    arrival_time: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const response = await api.post("/register", formData);

        if (response.status === 201) {
          setMessage({
            type: "success",
            text: "Usuario añadido exitosamente!",
          });
          setFormData({
            flight_number: "",
            departure_airport: "",
            arrival_airport: "",
            departure_time: "",
            arrival_time: "",
          });
        } else {
          setMessage({
            type: "error",
            text: response.data.message || "Error añadiendo usuario.",
          });
        }
      } catch (err) {
        setMessage({
          type: "error",
          text: err.response?.data?.message || "Error añadiendo usuario.",
        });
      }
    },
    [formData]
  );

  return (
    <div>
      <form className="p-16" onSubmit={handleSubmit}>
        <Tooltips content="Ingrese los datos del vuelo a registrar en los campos" />
        <div className="mb-4">
          <motion.label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="codigoVuelo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            CÓDIGO DE VUELO*
          </motion.label>
          <motion.input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="codigoVuelo"
            type="text"
            placeholder="Código de vuelo"
            value={formData.flight_number}
            onChange={handleChange}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            required
          />
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <motion.label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="origen"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              ORIGEN*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="departure_airport"
              type="text"
              placeholder="Porlamar"
              value={formData.departure_airport}
              onChange={handleChange}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <motion.label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="destino"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              DESTINO*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="arrival_airport"
              type="text"
              placeholder="Los Roques"
              value={formData.arrival_airport}
              onChange={handleChange}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <motion.label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="departure_time"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              required
            >
              FECHA DE DESPEGUE*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fechaDespegue"
              type="date"
              placeholder="Fecha de despegue"
              value={formData.departure_time}
              onChange={handleChange}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <motion.label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="arrival_time"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              required
            >
              FECHA DE ARRIVO*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="arrival_time"
              type="date"
              placeholder="Fecha de arrivo"
              value={formData.arrival_time}
              onChange={handleChange}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              required
            />
          </div>
        </div>
        <motion.div
          className="flex items-center justify-center pt-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <button
            className="bg-success-color-btn hover:bg-hover-success-color-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            REGISTRAR
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default InputFligthRegister;
