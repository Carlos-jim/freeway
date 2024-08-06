// src/components/BoardingPass.js
import React from "react";
import airplane from "../public/plane.png";
import barcode from "../public/bar-code.png";
import { Link } from "react-router-dom";
import Navbar from "../components/navbarUser";

const BoardingPass = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center">
        <div className="max-w-xl bg-white shadow-lg rounded-lg border overflow-hidden mt-14">
          <div className="flex">
            {/* Sección Izquierda */}
            <div className="bg-blue-900 text-white p-4 flex flex-col items-center">
              <div className="text-white mb-6">
                <img src={airplane} alt="Airplane" className="w-14 h-14" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2">BOARDING PASS</h3>
              </div>
            </div>

            {/* Sección Derecha */}
            <div className="flex-1 p-4">
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
            </div>
          </div>
        </div>
        <Link to="/inicio">
          <div className="w-40 flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded w-full mt-6"
            >
              Aceptar
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BoardingPass;
