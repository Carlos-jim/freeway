import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";
import "../components/backgroundImgUser";
import BackgroundImgUser from "../components/backgroundImgUser";
import Navbar from "../components/navbarUser";
import DataTableUser from "../components/datatableUser"; // Importa el nuevo componente

const ItineraryTable = () => {
  const data = [
    { fechaSalida: "12/06/2024 19:00HRS", origen: "PORLAMAR", destino: "LOS ROQUES", tipo: "ECONOMICA", precio: "$150" },
    { fechaSalida: "12/06/2024 15:00HRS", origen: "MAIQUETIA", destino: "CANAIMA", tipo: "ECONOMICA", precio: "$550" },
    { fechaSalida: "11/06/2024 09:00HRS", origen: "LOS ROQUES", destino: "PTO. ORDAZ", tipo: "ECONOMICA", precio: "$350" },
    { fechaSalida: "10/06/2024 00:00HRS", origen: "PTO. ORDAZ", destino: "CANAIMA", tipo: "ECONOMICA", precio: "$350" },
    { fechaSalida: "10/06/2024 05:00HRS", origen: "CANAIMA", destino: "LOS ROQUES", tipo: "ECONOMICA", precio: "$250" },
    { fechaSalida: "09/06/2024 13:00HRS", origen: "PORLAMAR", destino: "MAIQUETIA", tipo: "ECONOMICA", precio: "$200" },
  ];

  const [origenFilter, setOrigenFilter] = useState("");
  const [destinoFilter, setDestinoFilter] = useState("");
  const [precioMax, setPrecioMax] = useState(600);

  const uniqueOrigenes = [...new Set(data.map((item) => item.origen))];
  const uniqueDestinos = [...new Set(data.map((item) => item.destino))];

  const dataWithNumericPrices = data.map((item) => ({
    ...item,
    precio: parseFloat(item.precio.replace("$", ""))
  }));

  const filteredData = dataWithNumericPrices.filter((item) => {
    const matchOrigen = origenFilter ? item.origen === origenFilter : true;
    const matchDestino = destinoFilter ? item.destino === destinoFilter : true;
    const matchPrecio = item.precio <= precioMax;
    return matchOrigen && matchDestino && matchPrecio;
  });

  return (
    <div>
      <Navbar />
      <BackgroundImgUser />
      <div className="container mx-auto p-4 pb-14 pt-20">
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ITINERARIO DE VUELO
        </motion.h1>
        <motion.div
          className="flex flex-start items-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <select
            value={origenFilter}
            onChange={(e) => setOrigenFilter(e.target.value)}
            className="border rounded py-1 px-2"
          >
            <option value="">Todos los Orígenes</option>
            {uniqueOrigenes.map((origen, index) => (
              <option key={index} value={origen}>
                {origen}
              </option>
            ))}
          </select>
          <select
            value={destinoFilter}
            onChange={(e) => setDestinoFilter(e.target.value)}
            className="border rounded py-1 px-2 m-4"
          >
            <option value="">Todos los Destinos</option>
            {uniqueDestinos.map((destino, index) => (
              <option key={index} value={destino}>
                {destino}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <label className="mr-2">Precio Máximo: ${precioMax}</label>
            <input
              type="range"
              min="100"
              max="600"
              step="50"
              value={precioMax}
              onChange={(e) => setPrecioMax(Number(e.target.value))}
              className="border rounded py-1 px-2 m-4"
            />
          </div>
        </motion.div>
        <DataTableUser data={filteredData} />
      </div>
    </div>
  );
};

export default ItineraryTable;
