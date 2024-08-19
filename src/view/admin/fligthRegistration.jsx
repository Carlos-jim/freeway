import React from "react";
import { motion } from "framer-motion";
import NavbarAdmin from "../../components/admin/navbarAdmin";
import InputFligthRegister from "../../components/admin/inputFligthRegistration";

const FlightRegistration = () => {

  return (
    <div>
      <NavbarAdmin />
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white rounded w-full">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-white p-4"
            style={{ background: "#6147FF" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            REGISTRO DE VUELOS
          </motion.h1>
          <div>
            <InputFligthRegister></InputFligthRegister>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightRegistration;
