import React from "react";
import options from "../.json/options-select.json";
import Navbar from "../components/navbarUser";

const FlightRegistration = () => {
  return (
    <div>
      <Navbar></Navbar>
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded w-full">
        <h1
          className="text-4xl font-bold text-center mb-8 text-white p-4"
          style={{ background: "#6147FF" }}
        >
          REGISTRO DE VUELOS
        </h1>
        <form className="p-16">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="codigoVuelo"
            >
              CÓDIGO DE VUELO
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="codigoVuelo"
              type="text"
              placeholder="Código de vuelo"
            />
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="origen"
              >
                ORIGEN
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="origen"
                type="text"
                placeholder="Origen"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="destino"
              >
                DESTINO
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="destino"
                type="text"
                placeholder="Destino"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fechaDespegue"
              >
                FECHA DE DESPEGUE
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fechaDespegue"
                type="date"
                placeholder="Fecha de despegue"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fechaArrivo"
              >
                FECHA DE ARRIVO
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fechaArrivo"
                type="date"
                placeholder="Fecha de arrivo"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="clase"
              >
                CLASE
              </label>
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="clase"
              >
                {options.clasevuelo.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tipo"
              >
                TIPO
              </label>
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tipo"
              >
                {options.tipovuelo.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-center pt-8">
            <button
              className="bg-success-color-btn hover:bg-hover-success-color-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              REGISTRAR
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FlightRegistration;
