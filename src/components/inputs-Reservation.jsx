import React from "react";

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
          <option>Argentino</option>
          <option>Otro</option>
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
          <option>PayPal</option>
        </select>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-600 text-white p-2 rounded-lg w-32">
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
