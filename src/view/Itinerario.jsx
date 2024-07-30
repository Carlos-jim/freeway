import React from "react";
import "../index.css";
import "../components/backgroundImgUser";
import BackgroundImgUser from "../components/backgroundImgUser";
import Navbar from "../components/navbarUser";

const ItineraryTable = () => {
  const data = [
    {
      fechaSalida: "12/06/2024 19:00HRS",
      fechaRegreso: "16/06/2024 14:00HRS",
      origen: "PORLAMAR",
      destino: "LOS ROQUES",
      tipo: "TURISTA",
      precio: "$150",
    },
    {
      fechaSalida: "12/06/2024 15:00HRS",
      fechaRegreso: "23/06/2024 11:00HRS",
      origen: "MAIQUETIA",
      destino: "CANAIMA",
      tipo: "PRIMERA CLASE",
      precio: "$550",
    },
    {
      fechaSalida: "11/06/2024 09:00HRS",
      fechaRegreso: "27/07/2024 08:00HRS",
      origen: "LOS ROQUES",
      destino: "PTO. ORDAZ",
      tipo: "CLASE EJECUTIVA",
      precio: "$350",
    },
    {
      fechaSalida: "10/06/2024 00:00HRS",
      fechaRegreso: "14/06/2024 18:00HRS",
      origen: "PTO. ORDAZ",
      destino: "CANAIMA",
      tipo: "ECONOMÍA PREMIUM",
      precio: "$350",
    },
    {
      fechaSalida: "10/06/2024 05:00HRS",
      fechaRegreso: "22/06/2024 11:00HRS",
      origen: "CANAIMA",
      destino: "LOS ROQUES",
      tipo: "TURISTA",
      precio: "$250",
    },
    {
      fechaSalida: "09/06/2024 13:00HRS",
      fechaRegreso: "19/06/2024 20:00HRS",
      origen: "PORLAMAR",
      destino: "MAIQUETIA",
      tipo: "TURISTA",
      precio: "$200",
    },
  ];

  return (
    <div>
      <Navbar />
      <BackgroundImgUser />
      <div className="container mx-auto p-4 pt-20">
        <h1 className="text-3xl font-bold text-center mb-8">
          ITINERARIO DE VUELO
        </h1>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <label className="switch">
              <input type="checkbox" style={{color: '#6147FF'}} />
              <span className="slider round"></span>
            </label>
            <span className="ml-2">IDA Y VUELTA</span>
          </div>
          <input
            type="text"
            placeholder="Buscar"
            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-[#6147FF] text-white">
              <tr>
                <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                  Fecha Salida
                </th>
                <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                  Fecha Regreso
                </th>
                <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                  Origen
                </th>
                <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                  Destino
                </th>
                <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                  Tipo
                </th>
                <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                  Precio
                </th>
                <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                  Reservar
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((item, index) => (
                <tr key={index} className="bg-gray-100 border-b">
                  <td className="py-3 px-4">{item.fechaSalida}</td>
                  <td className="py-3 px-4">{item.fechaRegreso}</td>
                  <td className="py-3 px-4">{item.origen}</td>
                  <td className="py-3 px-4">{item.destino}</td>
                  <td className="py-3 px-4">{item.tipo}</td>
                  <td className="py-3 px-4">{item.precio}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-[#37F83F] text-white rounded-mt p-2 hover:bg-purple-700 focus:outline-none focus:shadow-outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItineraryTable;
