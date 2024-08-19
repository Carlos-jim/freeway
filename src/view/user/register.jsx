import React from 'react';
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputAuthRegister from "../../components/inputAuth-register";
import NavbarAuth from "../../components/navbarAuth";
import Tooltips from "../../components/tooltip";

const Register = () => {
 
  return (
    <div>
      <NavbarAuth />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded mt-10 mb-10 shadow-md w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Tooltips content="Para registrarse, ingrese su correo electronico y contraseña" />
          <h1
            className="text-5xl font-bold text-center bg-clip-text text-transparent mb-9"
            style={{
              color: "#6147FF",
            }}
          >
            REGISTRATE
          </h1>
          <InputAuthRegister/>
          
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
