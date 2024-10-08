import React, { useState } from "react";
import nacionalidadOptions from "../../.json/nacionalidad.json";
import Tooltips from "../tooltip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Función para formatear la fecha al formato yyyy-mm-dd
const formatDate = (date) => {
  const d = new Date(date);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

// Obtener la fecha actual
const today = new Date();
today.setFullYear(today.getFullYear() -20);

// Configurar una fecha de vencimiento por defecto (por ejemplo, 10 años a partir de hoy)
const defaultExpiryDate = new Date();
defaultExpiryDate.setFullYear(defaultExpiryDate.getFullYear() + 10);

const InputsPersonales = () => {
  const [formData, setFormData] = useState({
    nombre: "John",
    apellido: "Smith",
    fechaNacimiento: formatDate(today), // Fecha actual
    tipoDocumento: "Cedula de identidad",
    numeroDocumento: "V-30921233",
    fechaVencimiento: formatDate(defaultExpiryDate), // Fecha de vencimiento predeterminada
    paisOrigen: "Venezuela",
    genero: "Masculino",
    correo: "johnsmithweek@gmail.com",
    telefono: "0424774373",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    tipoDocumento: "",
    numeroDocumento: "",
    fechaVencimiento: "",
    paisOrigen: "",
    genero: "",
    correo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      tipoDocumento: "",
      numeroDocumento: "",
      fechaVencimiento: "",
      paisOrigen: "",
      genero: "",
      correo: "",
      telefono: "",
    };

    // Validar que el documento comience con V- o E- seguido de números
    if (!/^([VE]-\d+)$/.test(formData.numeroDocumento)) {
      newErrors.numeroDocumento =
        "El número de documento debe comenzar con V- o E- seguido de números";
      valid = false;
    }

    // Validar que el email sea un correo electrónico válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      newErrors.correo = "Ingrese un correo electrónico válido";
      valid = false;
    }

    // Validar que el teléfono sea numérico
    if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = "El teléfono debe ser numérico";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Formulario enviado", formData);
    }
  };

  return (
    <div>
      <Tooltips content="Verifique que los datos sean los correctos" />
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
              id="nombre"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="nombre"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre*
            </label>
            {errors.nombre && (
              <p className="text-red-500 text-xs italic">{errors.nombre}</p>
            )}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.2 }}>
            <input
              type="text"
              id="apellido"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="apellido"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apellido*
            </label>
            {errors.apellido && (
              <p className="text-red-500 text-xs italic">{errors.apellido}</p>
            )}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.9 }}>
            <input
              type="number"
              id="correo"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.correo}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="correo"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Cedula de identidad
            </label>
            {errors.correo && (
              <p className="text-red-500 text-xs italic">{errors.correo}</p>
            )}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 1.0 }}>
            <input
              type="text"
              id="telefono"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="telefono"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Teléfono*
            </label>
            {errors.telefono && (
              <p className="text-red-500 text-xs italic">{errors.telefono}</p>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-4 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Link to="/embarque">
          <button className="bg-success-color-btn hover:bg-hover-success-color-btn text-white p-2 rounded-lg w-32">
            Confirmar
          </button>
          </Link>
          <Link to="/chequeo">
            <button className="bg-[#FF0000] hover:bg-[#DA0808] text-white p-2 rounded-lg ml-4 w-32">
              Cancelar
            </button>
          </Link>
        </motion.div>
      </form>
    </div>
  );
};

export default InputsPersonales;
