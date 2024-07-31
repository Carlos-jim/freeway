import React, { useState } from "react";
import visaLogo from "../public/visa.png";
import Navbar from "../components/navbarUser";
import { CSSTransition } from 'react-transition-group';
import '../public/paymentForm.css'; // Asegúrate de tener esta hoja de estilos

const PaymentForm = () => {
  const [showPaymentFields, setShowPaymentFields] = useState(false);

  const handleCardClick = () => {
    setShowPaymentFields(!showPaymentFields);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-sm">
          <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-[#6147FF] mb-6">
            Freeway Airlines
          </h1>
          <h2 className="text-xl text-center mb-4" style={{ color: "#6147FF" }}>
            Pago de reserva
          </h2>
          <div
            className="flex items-center justify-center mb-4 bg-[#EEEEEE] rounded-lg cursor-pointer"
            onClick={handleCardClick}
          >
            <img
              src={visaLogo}
              alt="Visa"
              className="w-10 h-10 object-contain"
            />
            <span className="text-gray-700 ml-2">
              Tarjeta de Credito o Debito
            </span>
          </div>
          <CSSTransition
            in={showPaymentFields}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="numero de cuenta"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="CVV"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="fecha de vencimiento"
                className="border p-2 rounded w-full"
              />
            </div>
          </CSSTransition>
          <button className="bg-[#37F83F] text-white p-2 rounded w-full mt-4">
            Registrarse
          </button>
          <div className="text-center mt-4 text-gray-700">
            <span>tambien puedes cancelar con</span>
            <div className="border-t border-gray-300 mt-2"></div>
            <button className="text-gray-700 mt-2 text-center w-full h-8 bg-[#EEEEEE] rounded-lg">
              Efectivo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
