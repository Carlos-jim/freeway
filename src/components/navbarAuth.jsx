import React from "react";
import { Link } from "react-router-dom";

const NavbarAuth = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-[#6147FF]">Freeway Airlines</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <a
              href="#iniciar-sesion"
              className="text-gray-700 hover:text-gray-900"
            >
              Iniciar sesión
            </a>
          </Link>

          <Link to="/registro">
            <a
              href="#signup"
              className="text-white px-4 py-2 rounded-md hover:bg-purple-700"
              style={{ background: "#6147FF" }}
            >
              Registrate
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none focus:text-gray-900">
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
    </nav>
  );
};

export default NavbarAuth;
