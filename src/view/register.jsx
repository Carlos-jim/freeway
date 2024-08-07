import React from 'react';
import "../index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputAuth from "../components/input-auth";
import NavbarAuth from "../components/navbarAuth";
import Tooltips from "../components/tooltip";
import gmail from '../public/google.png'

const notify = () => toast.success("Registrado exitosamente");

const Register = () => {
  const handleSubmit = () => {
    notify();
  };

  return (
    <div>
      <NavbarAuth />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Tooltips content="Para registrarse, ingrese su correo electronico y contraseña" />
          <h1
            className="text-5xl font-bold text-center bg-clip-text text-transparent mb-9"
            style={{
              color: "#6147FF",
            }}
          >
            REGISTRATE
          </h1>
          <InputAuth onSubmit={handleSubmit} />
          <div className="flex items-center justify-center mb-4 p-2 bg-[#EEEEEE] rounded-lg cursor-pointer mt-4">
            <img src={gmail} alt="Visa" className="w-6 h-6 object-contain" />
            <span className="text-gray-700 ml-2 font-semibold">GOOGLE</span>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
