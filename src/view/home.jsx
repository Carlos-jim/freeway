import React, { useState } from "react";
import { motion } from "framer-motion";
import BackgroundImgUser from "../components/backgroundImgUser";
import Navbar from "../components/navbarUser";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    origen: "",
    destino: "",
    fechaSalida: "",
    fechaRegreso: "",
  });

  const [errors, setErrors] = useState({
    origen: "",
    destino: "",
    fechaSalida: "",
    fechaRegreso: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      origen: "",
      destino: "",
      fechaSalida: "",
      fechaRegreso: "",
    };

    if (!formData.origen.trim()) {
      newErrors.origen = "El campo de origen es obligatorio";
      valid = false;
    }

    if (!formData.destino.trim()) {
      newErrors.destino = "El campo de destino es obligatorio";
      valid = false;
    }

    if (!formData.fechaSalida) {
      newErrors.fechaSalida = "El campo de fecha de salida es obligatorio";
      valid = false;
    }

    if (!formData.fechaRegreso) {
      newErrors.fechaRegreso = "El campo de fecha de regreso es obligatorio";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Si el formulario es válido, redirigir a /itinerario
      navigate("/itinerario");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
        <div className="absolute inset-0 z-0">
          <BackgroundImgUser />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 bg-white/75 backdrop-blur-sm">
          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.nav
              className="flex justify-around p-4 mb-8 bg-white rounded-md shadow-md"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#" className="text-red-500">
                🛫 VUELOS
              </a>
              <Link to="/chequeo">👤 CHECK-IN</Link>
              <Link to="/itinerario">🗺️ ITINERARIO</Link>
              <a href="#" className="text-gray-500">
                🛅 MI RESERVA
              </a>
            </motion.nav>
            <motion.form
              className="p-8 bg-white rounded-md shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col mb-4">
                  <label className="mb-2 text-gray-700">ORIGEN</label>
                  <input
                    type="text"
                    name="origen"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Ciudad de origen"
                    value={formData.origen}
                    onChange={handleChange}
                    required
                  />
                  {errors.origen && (
                    <p className="text-red-500 text-xs italic">{errors.origen}</p>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2 text-gray-700">DESTINO</label>
                  <input
                    type="text"
                    name="destino"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Ciudad de destino"
                    value={formData.destino}
                    onChange={handleChange}
                    required
                  />
                  {errors.destino && (
                    <p className="text-red-500 text-xs italic">{errors.destino}</p>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2 text-gray-700">FECHA SALIDA</label>
                  <input
                    type="date"
                    name="fechaSalida"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    value={formData.fechaSalida}
                    onChange={handleChange}
                    required
                  />
                  {errors.fechaSalida && (
                    <p className="text-red-500 text-xs italic">{errors.fechaSalida}</p>
                  )}
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mb-2 text-gray-700">FECHA REGRESO</label>
                  <input
                    type="date"
                    name="fechaRegreso"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    value={formData.fechaRegreso}
                    onChange={handleChange}
                    required
                  />
                  {errors.fechaRegreso && (
                    <p className="text-red-500 text-xs italic">{errors.fechaRegreso}</p>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full px-4 py-2 mt-6 font-semibold text-white bg-primary-color-btn rounded-md hover:bg-hover-primary-color-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                BUSCAR
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
