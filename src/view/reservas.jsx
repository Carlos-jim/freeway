import React from "react";
import TableAdmin from "../components/datatableAdmin";

const ReservationTable = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded shadow-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-white p-4"
        style={{background: "#6147FF"}}>
          RESERVAS
        </h1>
        <form className="mb-8 p-10">
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="codigoVuelo"
                type="text"
                placeholder="CÓDIGO DE VUELO"
              />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="origen"
                type="text"
                placeholder="ORIGEN"
              />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="destino"
                type="text"
                placeholder="DESTINO"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fechaSalida"
                type="date"
                placeholder="FECHA SALIDA"
              />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fechaRegreso"
                type="date"
                placeholder="FECHA REGRESO"
              />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cedulaPasajero"
                type="text"
                placeholder="CÉDULA DEL PASAJERO"
              />
            </div>
          </div>
        </form>
        <TableAdmin/>
      </div>
    </div>
  );
};

export default ReservationTable;
