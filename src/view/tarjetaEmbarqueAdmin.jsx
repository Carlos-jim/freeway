// src/components/BoardingPass.js
import React from "react";
import airplane from "../public/plane.png";
import barcode from "../public/bar-code.png";
import { Link } from "react-router-dom";
import NavbarAdmin from "../components/navbarAdmin";
import { motion } from "framer-motion";

const BoardingPassAdmin = () => {
  return (
    <div>
      <NavbarAdmin />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-xl bg-white shadow-lg rounded-lg border overflow-hidden mt-14"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex">
            {/* Sección Izquierda */}
            <motion.div
              className="bg-blue-900 text-white p-4 flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-white mb-6">
                <img src={airplane} alt="Airplane" className="w-14 h-14" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">TARJETA DE EMBARQUE</h3>
              </div>
            </motion.div>

            {/* Sección Derecha */}
            <motion.div
              className="flex-1 p-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Nombre del pasajero</h3>
                <p className="text-gray-800">JOHN SMITH</p>
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Desde</h3>
                  <p className="text-gray-800">Porlamar</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">a</h3>
                  <p className="text-gray-800">Los Roques</p>
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Vuelo</h3>
                  <p className="text-gray-800">F 0575</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Asiento</h3>
                  <p className="text-gray-800">55L</p>
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Fecha</h3>
                  <p className="text-gray-800">09 JUN</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hora</h3>
                  <p className="text-gray-800">08:40 AM</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Puerta</h3>
                  <p className="text-gray-800">22</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Bordo a</h3>
                  <p className="text-gray-800">08:10 AM</p>
                </div>
                <div className="mr-1">
                  {/* Código de barras */}
                  <img src={barcode} alt="Barcode" className="w-20 h-20" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <Link to="/reservaciones">
          <motion.div
            className="w-40 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded w-full mt-6"
            >
              Aceptar
            </button>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default BoardingPassAdmin;
