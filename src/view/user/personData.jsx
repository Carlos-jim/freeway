import React from "react";
import InputsPersonales from "../components/inputsPersonales";
import Navbar from "../components/navbarUser";
import BackgroundImgUser from "../components/backgroundImgUser";
import Tooltips from "../components/tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Migas from "../components/migaspan";

const notify = () => toast.success("Confirmación realizada exitosamente");

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
        
        {/* Espaciado de las Migas de Pan */}
        <div className="flex justify-center mb-8">
          <Migas />
        </div>

        <InputsPersonales onSubmit={handleReservationSubmit} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default PersonData;
