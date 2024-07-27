import React from "react";
import InputsReservation from "../components/inputs-Reservation";
import Navbar from "../components/navbarUser";
import BackgroundImgUser from "../components/backgroundImgUser";

const FlightReservation = () => {
  return (
    <div>
        <Navbar/>
        <BackgroundImgUser/>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-24">
        <h1 className="text-3xl font-bold text-center mb-4">
          Reserva de Vuelo
        </h1>
        <h2 className="text-xl text-center mb-8">Datos de los Pasajeros</h2>
        <InputsReservation />
      </div>
    </div>
  );
};

export default FlightReservation;
