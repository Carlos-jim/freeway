import React from "react";
import nacionalidadOptions from '../.json/nacionalidad.json';

const InputsReservation = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        
        <div className="relative mt-4">
          <input
            type="text"
            id="nombre"
            placeholder=" "
            className="peer border p-2 rounded w-full"
          />
          <label
            htmlFor="nombre"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre
          </label>
        </div>
        
        <div className="relative mt-4">
          <input
            type="text"
            id="apellido"
            placeholder=" "
            className="peer border p-2 rounded w-full"
          />
          <label
            htmlFor="apellido"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Apellido
          </label>
        </div>
        
        <div className="relative mt-4">
          <input
            type="date"
            id="fechaNacimiento"
            placeholder=" "
            className="peer border p-2 rounded w-full"
          />
          <label
            htmlFor="fechaNacimiento"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fecha Nacimiento
          </label>
        </div>
        
        <div className="relative mt-4">
          <select
            id="tipoDocumento"
            className="peer border p-2 rounded w-full bg-transparent"
            defaultValue=""
          >
            <option value="" disabled hidden>Tipo de Documento</option>
            <option>Cedula de identidad</option>
            <option>Pasaporte</option>
          </select>
          <label
            htmlFor="tipoDocumento"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tipo de Documento
          </label>
        </div>
        
        <div className="relative mt-4">
          <input
            type="text"
            id="numeroDocumento"
            placeholder=" "
            className="peer border p-2 rounded w-full"
          />
          <label
            htmlFor="numeroDocumento"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            N° de Documento
          </label>
        </div>
        
        <div className="relative mt-4">
          <input
            type="date"
            id="fechaVencimiento"
            placeholder=" "
            className="peer border p-2 rounded w-full"
          />
          <label
            htmlFor="fechaVencimiento"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Fecha Vto. Pasaporte
          </label>
        </div>
        
        <div className="relative mt-4">
          <select
            id="paisOrigen"
            className="peer border p-2 rounded w-full bg-transparent"
            defaultValue=""
          >
            <option value="" disabled hidden>Pais de origen</option>
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
            Pais de origen
          </label>
        </div>
        
        <div className="relative mt-4">
          <select
            id="genero"
            className="peer border p-2 rounded w-full bg-transparent"
            defaultValue=""
          >
            <option value="" disabled hidden>Género</option>
            <option>Masculino</option>
            <option>Femenino</option>
          </select>
          <label
            htmlFor="genero"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Género
          </label>
        </div>
        
        <div className="relative mt-4">
          <input
            type="email"
            id="correo"
            placeholder=" "
            className="peer border p-2 rounded w-full"
          />
          <label
            htmlFor="correo"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo
          </label>
        </div>
        
        <div className="relative mt-4">
          <input
            type="text"
            id="telefono"
            placeholder=" "
            className="peer border p-2 rounded w-full"
          />
          <label
            htmlFor="telefono"
            className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Teléfono
          </label>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <button className="bg-success-color-btn hover:bg-hover-success-color-btn text-white p-2 rounded-lg w-32">
          Guardar
        </button>
      </div>
      
      <div className="flex justify-center mt-4">
        <button className="text-gray-600">Agregar Pasajero</button>
      </div>
    </div>
  );
};

export default InputsReservation;
