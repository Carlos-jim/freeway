import React, { useState, useCallback } from "react";
import Tooltips from "../tooltip";
import { motion } from "framer-motion";
import api from "../../api/api.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const InputsReservation = () => {
  const [formData, setFormData] = useState({
    flight_id: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    cedula: "",
    status: "SIN CONFIRMAR",
  });

  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Reserva realizada con éxito!");

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
        const response = await api.post("/reservation", formData);

        if (response.status === 201) {
          notifySuccess();
          setTimeout(() => {
            navigate('/pagos'); // Redirige a /pagos después de 3 segundos
          }, 3000);
        } else {
          toast.error(response.data.message || "Error al realizar la reserva.");
        }
      } catch (err) {
        toast.error(err.response?.data?.message || "Error al realizar la reserva.");
      }
    },
    [formData, navigate]
  );

  return (
    <div>
      <Tooltips content="Ingrese los datos en los campos para poder reservar su vuelo" />
      <form onSubmit={handleSubmit}>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.div className="relative mt-4" transition={{ delay: 0.1 }}>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="first_name"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre*
            </label>
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.2 }}>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="last_name"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido*
            </label>
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 1.0 }}>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="phone_number"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Teléfono*
            </label>
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.2 }}>
            <input
              type="text"
              id="cedula"
              name="cedula"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.cedula}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="cedula"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cedula de identidad*
            </label>
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.2 }}>
            <input
              type="text"
              id="flight_id"
              name="flight_id"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.flight_id}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="flight_id"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ID del vuelo*
            </label>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <button
            className="bg-success-color-btn hover:bg-hover-success-color-btn text-white p-2 rounded-lg w-32"
            type="submit"
          >
            Guardar
          </button>
        </motion.div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default InputsReservation;
