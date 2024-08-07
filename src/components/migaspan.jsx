import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Migas = () => {
  const location = useLocation();

  const steps = [
    { path: "/chequeo", label: "CHECK-IN" },
    { path: "/chequeo/datos-personales", label: "DATOS PASAJEROS" },
    { path: "/embarque", label: "TARJETA DE EMBARQUE" },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center mb-8 px-4">
      {steps.map((step, index) => {
        const isActive = location.pathname === step.path;
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center mb-4 sm:mb-0 sm:mx-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            <Link to={step.path}>
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>
            </Link>
            <span
              className={`text-sm mt-2 ${
                isActive ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Migas;
