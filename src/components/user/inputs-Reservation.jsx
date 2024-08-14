import React, { useState } from "react";
import nacionalidadOptions from '../../.json/nacionalidad.json';
import Tooltips from "../tooltip";
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";

const InputsReservation = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    tipoDocumento: '',
    numeroDocumento: '',
    fechaVencimiento: '',
    paisOrigen: '',
    genero: '',
    correo: '',
    telefono: ''
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    tipoDocumento: '',
    numeroDocumento: '',
    fechaVencimiento: '',
    paisOrigen: '',
    genero: '',
    correo: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      tipoDocumento: '',
      numeroDocumento: '',
      fechaVencimiento: '',
      paisOrigen: '',
      genero: '',
      correo: '',
      telefono: ''
    };
    

    // Validar que el documento comience con V- o E- seguido de números
    if (!/^([VE]-\d+)$/.test(formData.numeroDocumento)) {
      newErrors.numeroDocumento = 'El número de documento debe comenzar con V- o E- seguido de números';
      valid = false;
    }

    // Validar que el email sea un correo electrónico válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      newErrors.correo = 'Ingrese un correo electrónico válido';
      valid = false;
    }

    // Validar que el teléfono sea numérico
    if (!/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono debe ser numérico';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('Formulario enviado', formData);
      navigate("/pagos");
    }
  };

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
            {errors.nombre && <p className="text-red-500 text-xs italic">{errors.nombre}</p>}
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
            {errors.apellido && <p className="text-red-500 text-xs italic">{errors.apellido}</p>}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.3 }}>
            <input
              type="date"
              id="fechaNacimiento"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
            <label
              htmlFor="fechaNacimiento"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fecha Nacimiento
            </label>
            {errors.fechaNacimiento && <p className="text-red-500 text-xs italic">{errors.fechaNacimiento}</p>}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.4 }}>
            <select
              id="tipoDocumento"
              className="peer border p-2 rounded w-full bg-transparent"
              value={formData.tipoDocumento}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>Tipo de Documento</option>
              <option value="cedula">Cédula de identidad</option>
              <option value="pasaporte">Pasaporte</option>
            </select>
            <label
              htmlFor="tipoDocumento"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tipo de Documento*
            </label>
            {errors.tipoDocumento && <p className="text-red-500 text-xs italic">{errors.tipoDocumento}</p>}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.5 }}>
            <input
              type="text"
              id="numeroDocumento"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.numeroDocumento}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="numeroDocumento"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              N° de Documento*
            </label>
            {errors.numeroDocumento && <p className="text-red-500 text-xs italic">{errors.numeroDocumento}</p>}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.6 }}>
            <input
              type="date"
              id="fechaVencimiento"
              placeholder=" "
              className="peer border p-2 rounded w-full"
              value={formData.fechaVencimiento}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="fechaVencimiento"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fecha Vto. Pasaporte*
            </label>
            {errors.fechaVencimiento && <p className="text-red-500 text-xs italic">{errors.fechaVencimiento}</p>}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.7 }}>
            <select
              id="paisOrigen"
              className="peer border p-2 rounded w-full bg-transparent"
              value={formData.paisOrigen}
              onChange={handleChange}
            >
              <option value="" disabled hidden>País de origen</option>
              {nacionalidadOptions.nacionalidad.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label
              htmlFor="paisOrigen"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              País de origen
            </label>
            {errors.paisOrigen && <p className="text-red-500 text-xs italic">{errors.paisOrigen}</p>}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.8 }}>
            <select
              id="genero"
              className="peer border p-2 rounded w-full bg-transparent"
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="" disabled hidden>Género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            <label
              htmlFor="genero"
              className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Género
            </label>
            {errors.genero && <p className="text-red-500 text-xs italic">{errors.genero}</p>}
          </motion.div>

          <motion.div className="relative mt-4" transition={{ delay: 0.9 }}>
            <input
              type="email"
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
              Correo*
            </label>
            {errors.correo && <p className="text-red-500 text-xs italic">{errors.correo}</p>}
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
            {errors.telefono && <p className="text-red-500 text-xs italic">{errors.telefono}</p>}
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <button className="bg-success-color-btn hover:bg-hover-success-color-btn text-white p-2 rounded-lg w-32">
            Guardar
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default InputsReservation;
