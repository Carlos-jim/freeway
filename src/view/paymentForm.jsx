import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import visaLogo from "../public/visa.png";
import Navbar from "../components/navbarUser";
import Tooltips from "../components/tooltip";
import "../public/paymentForm.css"; // Asegúrate de tener esta hoja de estilos
import cash from "../public/dollar.png";
const PaymentForm = () => {
  const [showPaymentFields, setShowPaymentFields] = useState(false);
  const [formData, setFormData] = useState({
    accountNumber: "",
    cvv: "",
    expiryDate: "",
  });
  const [errors, setErrors] = useState({
    accountNumber: "",
    cvv: "",
    expiryDate: "",
  });

  const handleCardClick = () => {
    setShowPaymentFields(!showPaymentFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      accountNumber: "",
      cvv: "",
      expiryDate: "",
    };

    // Validar número de cuenta (asumiendo 16 dígitos)
    if (!/^\d{16}$/.test(formData.accountNumber)) {
      newErrors.accountNumber = "El número de cuenta debe tener 16 dígitos";
      valid = false;
    }

    // Validar CVV (3 dígitos)
    if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "El CVV debe tener 3 dígitos";
      valid = false;
    }

    // Validar fecha de vencimiento (formato mm/yy)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate =
        "La fecha de vencimiento debe estar en formato mm/yy";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Formulario enviado", formData);
      // Aquí puedes agregar la lógica para procesar el pago
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white shadow-md p-8 rounded-lg w-full max-w-sm"
        >
          <Tooltips content="Seleccione su método de pago. Si elige tarjeta de crédito, ingrese sus datos bancarios. Si elige efectivo, el monto debe ser pagado en taquilla." />
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
          <AnimatePresence>
            {showPaymentFields && (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <input
                    type="text"
                    name="accountNumber"
                    placeholder="Número de cuenta"
                    className="border p-2 rounded w-full"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.accountNumber && (
                    <p className="text-red-500 text-xs italic">
                      {errors.accountNumber}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    className="border p-2 rounded w-full"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-xs italic">{errors.cvv}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="Fecha de vencimiento (mm/yy)"
                    className="border p-2 rounded w-full"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-xs italic">
                      {errors.expiryDate}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-success-color-btn hover:bg-hover-success-color-btn text-white p-2 rounded w-full mt-4"
                >
                  PAGAR
                </button>
              </motion.form>
            )}
          </AnimatePresence>
          <div className="text-center mt-4 text-gray-700">
            <span>También puedes cancelar con</span>
            <div className="border-t border-gray-300 mt-2"></div>
            <Link to="/inicio">
              <div className="flex items-center justify-center mb-4 bg-[#EEEEEE] rounded-lg cursor-pointer mt-4">
                <img
                  src={cash}
                  alt="Visa"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-gray-700 ml-2">
                  Tarjeta de Credito o Debito
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentForm;
