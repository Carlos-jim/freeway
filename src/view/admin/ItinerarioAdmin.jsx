import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";
import api from "../../api/api.js"
import BackgroundImgUser from "../../components/user/backgroundImgUser";
import NavbarAdmin from "../../components/admin/navbarAdmin";
import DataTableItinerario from "../../components/user/datatableItinerario.jsx";

const ItineraryTableAdmin = () => {
  const[data, setData] = useState([]);
  const [origenFilter, setOrigenFilter] = useState("");
  const [destinoFilter, setDestinoFilter] = useState("");
  const [precioMax, setPrecioMax] = useState(600);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await api.get('/get-flights');
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, [])

  const uniqueOrigenes = [...new Set(data.map((item) => item.departure_airport))];
  const uniqueDestinos = [...new Set(data.map((item) => item.arrival_airport))];

  const dataWithNumericPrices = data.map((item) => ({
    ...item,
    flight_cost: parseFloat(item.flight_cost.replace("$", "")),
  }));

  const filteredData = dataWithNumericPrices.filter((item) => {
    const matchOrigen = origenFilter ? item.departure_airport === origenFilter : true;
    const matchDestino = destinoFilter ? item.arrival_airport === destinoFilter : true;
    const matchPrecio = item.flight_cost <= precioMax;
    return matchOrigen && matchDestino && matchPrecio;
  });


  return (
    <div>
      <NavbarAdmin />
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
          className="flex flex-wrap items-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <select
            value={origenFilter}
            onChange={(e) => setOrigenFilter(e.target.value)}
            className="border rounded py-1 px-2 w-1/4 mr-4"
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
            className="border rounded py-1 px-2 w-1/4 mr-4"
          >
            <option value="">Todos los Destinos</option>
            {uniqueDestinos.map((destino, index) => (
              <option key={index} value={destino}>
                {destino}
              </option>
            ))}
          </select>
          <div className="flex items-center w-1/1">
            <label className="mr-2">Precio Máximo: ${precioMax}</label>
            <input
              type="range"
              min="100"
              max="600"
              step="50"
              value={precioMax}
              onChange={(e) => setPrecioMax(Number(e.target.value))}
              className="border rounded-full appearance-none w-full h-5 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>
        <DataTableItinerario data={filteredData} />
      </div>
    </div>
  );
};

export default ItineraryTableAdmin;
