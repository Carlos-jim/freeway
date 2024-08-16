import React from 'react';
import "../index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputAuth from "../components/input-auth";
import NavbarAuth from "../components/navbarAuth";
import Tooltips from "../components/tooltip";


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
          
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
