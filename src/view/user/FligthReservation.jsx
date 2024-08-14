import React from "react";
import InputsReservation from "../components/inputs-Reservation";
import Navbar from "../components/navbarUser";
import BackgroundImgUser from "../components/backgroundImgUser";
import Tooltips from "../../components/tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast.success("Reserva realizada exitosamente");

const FlightReservation = () => {
  const handleReservationSubmit = () => {
    notify();
  };

  return (
    <div>
      <Navbar />
      <BackgroundImgUser />
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-24">
        <h1 className="text-3xl font-bold text-center mb-4">Reserva de Vuelo</h1>
        <div className="flex justify-end mt-4">
          <button className="text-gray-600">Agregar Pasajero ➕</button>
        </div>
        <h2 className="text-xl text-center mb-8">Datos de los Pasajeros</h2>
        <InputsReservation onSubmit={handleReservationSubmit} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default FlightReservation;
