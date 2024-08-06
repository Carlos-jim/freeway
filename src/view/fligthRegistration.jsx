import React from "react";
import { motion } from "framer-motion";
import options from "../.json/options-select.json";
import NavbarAdmin from "../components/navbarAdmin";
import Tooltips from "../components/tooltip";

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
          <form className="p-16">
            <Tooltips content="Ingrese los datos del vuelo a registrar en los campos" />
            <div className="mb-4">
              <motion.label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="codigoVuelo"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                CÓDIGO DE VUELO
              </motion.label>
              <motion.input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="codigoVuelo"
                type="text"
                placeholder="Código de vuelo"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <motion.label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="origen"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  ORIGEN
                </motion.label>
                <motion.input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="origen"
                  type="text"
                  placeholder="Origen"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <motion.label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="destino"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  DESTINO
                </motion.label>
                <motion.input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="destino"
                  type="text"
                  placeholder="Destino"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <motion.label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fechaDespegue"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  FECHA DE DESPEGUE
                </motion.label>
                <motion.input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fechaDespegue"
                  type="date"
                  placeholder="Fecha de despegue"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <motion.label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fechaArrivo"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  FECHA DE ARRIVO
                </motion.label>
                <motion.input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fechaArrivo"
                  type="date"
                  placeholder="Fecha de arrivo"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <motion.label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="clase"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  CLASE
                </motion.label>
                <motion.select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="clase"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {options.clasevuelo.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </motion.select>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <motion.label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tipo"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  TIPO
                </motion.label>
                <motion.select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tipo"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  {options.tipovuelo.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </motion.select>
              </div>
            </div>
            <motion.div
              className="flex items-center justify-center pt-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <button
                className="bg-success-color-btn hover:bg-hover-success-color-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                REGISTRAR
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightRegistration;
