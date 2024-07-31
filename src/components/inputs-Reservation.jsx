import React from "react";
import nacionalidadOptions from '../.json/nacionalidad.json'

const InputsReservation = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Apellido"
          className="border p-2 rounded"
        />
        <input
          type="date"
          placeholder="Fecha Nacimiento"
          className="border p-2 rounded"
        />
        <select className="border p-2 rounded">
          <option>Tipo de Documento</option>
          <option>DNI</option>
          <option>Pasaporte</option>
        </select>
        <input
          type="text"
          placeholder="N° de Documento"
          className="border p-2 rounded"
        />
        <input
          type="date"
          placeholder="Fecha Vto. Pasaporte"
          className="border p-2 rounded"
        />
        <select className="border p-2 rounded">
          <option>Nacionalidad</option>
          {nacionalidadOptions.nacionalidad.map((option) => (
                  <option key={option.value} value={option.value}>
                   {option.label}
                  </option>
                ))}
        </select>
        <select className="border p-2 rounded">
          <option>Género</option>
          <option>Masculino</option>
          <option>Femenino</option>
        </select>
        <input
          type="email"
          placeholder="Correo"
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Confirme Correo"
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="border p-2 rounded"
        />
        <select className="border p-2 rounded">
          <option>Método de Pago</option>
          <option>Tarjeta de Crédito</option>
          <option>Efectivo</option>
        </select>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#37F83F] text-white p-2 rounded-lg w-32">
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
