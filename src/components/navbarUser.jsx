import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-pink-500">Freeway</span>
          <span className="text-purple-500">Airlines</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#inicio" className="text-gray-700 hover:text-gray-900">Inicio</a>
          <a href="#contacto" className="text-gray-700 hover:text-gray-900">Contacto</a>
          <a href="#idioma" className="text-gray-700 hover:text-gray-900">Idioma</a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none focus:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
