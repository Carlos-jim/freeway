import React, { useState } from "react";
import Navbar from "../components/navbarUser";
import BackgroundImgUser from "../components/backgroundImgUser";
import { Link, useNavigate } from "react-router-dom";

const CheckInForm = () => {
  const [reservationCode, setReservationCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setReservationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reservationCode.trim() === "") {
      setError("El código de reserva es obligatorio.");
    } else {
      setError("");
      // Redirigir a la página de datos personales
      navigate("/chequeo/datos-personales");
    }
  };

  return (
    <div>
      <Navbar />
      <BackgroundImgUser />
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full p-8 bg-white rounded-lg shadow-lg max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">CHECK-IN</h1>
          <div className="flex flex-col sm:flex-row justify-between mb-8 px-4 sm:px-18 md:px-24 lg:px-55">
            <div className="flex flex-col mr- items-center mb-4 sm:mb-0">
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
          <form className="flex items-center flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="reservationCode"
              >
                CÓDIGO DE RESERVA
              </label>
              <input
                id="reservationCode"
                type="text"
                placeholder="Código de Reserva"
                className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={reservationCode}
                onChange={handleChange}
                required
              />
              {error && (
                <p className="text-red-500 text-xs italic mt-2">{error}</p>
              )}
            </div>
            <div className="flex flex-col items-center justify-between">
              <button
                className="bg-success-color-btn hover:bg-hover-success-color-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                COMENZAR CHECK-IN
              </button>
              <Link to="/inicio">
                <button
                  className="bg-[#FF0000] hover:bg-[#DA0808] mt-7 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  ANULAR CHECK-IN
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckInForm;
