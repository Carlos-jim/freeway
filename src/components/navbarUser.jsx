import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-[#6147FF]">Freeway Airlines</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/inicio"
            className={`${
              location.pathname === "/inicio" ? "text-hover-link" : "text-gray-700"
            } hover:text-hover-link`}
          >
            🏠 Inicio
          </Link>
          <Link
            to="/reserva-rapida"
            className={`${
              location.pathname === "/itinerario" ? "text-hover-link" : "text-gray-700"
            } hover:text-hover-link`}
          >
            🚀 Reserva rapida
          </Link>
          <Link
            to="/itinerario"
            className={`${
              location.pathname === "/itinerario" ? "text-hover-link" : "text-gray-700"
            } hover:text-hover-link`}
          >
            🗺️ Itinerario
          </Link>
          <Link
            to="/chequeo"
            className={`${
              location.pathname === "/chequeo" ? "text-hover-link" : "text-gray-700"
            } hover:text-hover-link`}
          >
            👤 Chequeo
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link
            to="/inicio"
            className={`${
              location.pathname === "/inicio" ? "text-hover-link" : "text-gray-700"
            } block hover:text-hover-link`}
          >
           🏠 Inicio
          </Link>
          <Link
            to="/reservar-vuelo"
            className={`${
              location.pathname === "/reservar-vuelo" ? "text-hover-link" : "text-gray-700"
            } block hover:text-hover-link`}
          >
            Reservar
          </Link>
          <Link
            to="/itinerario"
            className={`${
              location.pathname === "/itinerario" ? "text-hover-link" : "text-gray-700"
            } block hover:text-hover-link`}
          >
            Itinerario
          </Link>
          <Link
            to="/chequeo"
            className={`${
              location.pathname === "/chequeo" ? "text-hover-link" : "text-gray-700"
            } block hover:text-hover-link`}
          >
            👤 Chequeo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
