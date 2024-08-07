import React from "react";
import InputsPersonales from "../components/inputsPersonales";
import Navbar from "../components/navbarUser";
import BackgroundImgUser from "../components/backgroundImgUser";
import Tooltips from "../components/tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const notify = () => toast.success("Confirmacion realizada exitosamente");

const PersonData = () => {
  const handleReservationSubmit = () => {
    notify();
  };

  return (
    <div>
      <Navbar />
      <BackgroundImgUser />
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-24">
        <h1 className="text-3xl font-bold text-center mb-4">Datos Personales</h1>
        <h2 className="text-xl text-center mb-8">Datos del pasajero</h2>
        <div className="flex flex-col sm:flex-row justify-between mb-8 px-4 sm:px-18 md:px-24 lg:px-55">
            <div className="flex flex-col mr-5 items-center mb-4 sm:mb-0">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                1
              </div>
              <span className="text-sm mt-2">CHECK-IN</span>
            </div>
            <div className="flex flex-col mr-5 items-center mb-4 sm:mb-0">
              <div className="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                2
              </div>
              <span className="text-sm mt-2">DATOS PASAJEROS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                3
              </div>
              <span className="text-sm mt-2">TARJETA DE EMBARQUE</span>
            </div>
          </div>
        <InputsPersonales onSubmit={handleReservationSubmit} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default PersonData;
