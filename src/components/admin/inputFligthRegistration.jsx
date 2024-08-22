import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Tooltips from "../../components/tooltip";
import api from "../../api/api.js";

const InputFligthRegister = () => {
  const [formData, setFormData] = useState({
    flight_number: "",
    airline_id: "",
    departure_airport: "",
    arrival_airport: "",
    departure_time: "",
    arrival_time: "",
    flight_cost: ""
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

      // Validación de fechas
      if (new Date(formData.arrival_time) < new Date(formData.departure_time)) {
        setMessage({
          type: "error",
          text: "La fecha de llegada no puede ser anterior a la fecha de despegue.",
        });
        return;
      }

      try {
        const response = await api.post("/register-flight", formData);

        if (response.status === 201) {
          setMessage({
            type: "success",
            text: "Vuelo registrado exitosamente!",
          });
          setFormData({
            flight_number: "",
            airline_id: "",
            departure_airport: "",
            arrival_airport: "",
            departure_time: "",
            arrival_time: "",
            flight_cost: ""
          });
        } else {
          setMessage({
            type: "error",
            text: response.data.message || "Error registrando vuelo.",
          });
        }
      } catch (err) {
        setMessage({
          type: "error",
          text: err.response?.data?.message || "Error registrando vuelo.",
        });
      }
    },
    [formData]
  );

  return (
    <div>
      <form className="p-16" onSubmit={handleSubmit}>
        <Tooltips content="Ingrese los datos del vuelo a registrar en los campos" />
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <motion.label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="flight_number"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              CODIGO DE VUELO*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="flight_number"
              name="flight_number"
              type="text"
              placeholder="AA121"
              value={formData.flight_number}
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
              htmlFor="flight_cost"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              COSTO DEL VUELO*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="flight_cost"
              name="flight_cost"
              type="number"
              placeholder="120"
              value={formData.flight_cost}
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
              htmlFor="departure_airport"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              ORIGEN*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="departure_airport"
              name="departure_airport"
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
              htmlFor="arrival_airport"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              DESTINO*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="arrival_airport"
              name="arrival_airport"
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
              id="departure_time"
              name="departure_time"
              type="date"
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
              name="arrival_time"
              type="date"
              value={formData.arrival_time}
              onChange={handleChange}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              required
            />
          </div>
        </div>
        <div>
        <div className="w-full md:w-1/2 px-2">
            <motion.label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="airline_id"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              required
            >
              CODIGO DE LA AEROLINEA*
            </motion.label>
            <motion.input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="airline_id"
              name="airline_id"
              type="text"
              value={formData.airline_id}
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
        {message && (
          <div
            className={`mt-4 p-2 text-center font-bold ${message.type === "success" ? "text-green-500" : "text-red-500"}`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
};

export default InputFligthRegister;
