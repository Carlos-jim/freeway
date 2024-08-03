import React from 'react';
import BackgroundImgUser from '../components/backgroundImgUser';
import Navbar from '../components/navbarUser';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
    <div className="relative min-h-screen bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="absolute inset-0 z-0">
        <BackgroundImgUser></BackgroundImgUser>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 bg-white/75 backdrop-blur-sm">
        <div className="w-full max-w-4xl">
          <nav className="flex justify-around p-4 mb-8 bg-white rounded-md shadow-md">
            <a href="#" className="text-red-500">
              🛫 VUELOS
            </a>
            <Link to="/chequeo">
                👤 CHECK-IN
            </Link>

            <Link to="/itinerario">
            🗺️ ITINERARIO
            </Link>
           
            <a href="#" className="text-gray-500">
              🛅 MI RESERVA
            </a>
          </nav>

          <form className="p-8 bg-white rounded-md shadow-lg">
            <div className="flex items-center mb-6">
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" />
                IDA Y VUELTA
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-gray-700">ORIGEN</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ciudad de origen"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-gray-700">DESTINO</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Ciudad de destino"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-gray-700">FECHA SALIDA</label>
                <input
                  type="date"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-gray-700">FECHA REGRESO</label>
                <input
                  type="date"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 font-semibold text-white bg-primary-color-btn rounded-md hover:bg-hover-primary-color-btn"
            >
              BUSCAR
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
