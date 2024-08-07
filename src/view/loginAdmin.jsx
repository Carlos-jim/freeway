import React from "react";
import "../index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputAuth from "../components/input-auth";
import NavbarAuth from "../components/navbarAuth";
import Tooltips from "../components/tooltip";
import InputAuthAdmin from "../components/input-authAdmin";

const notify = () => toast.success("Inicio de sesión exitoso");

const LoginAdmin = () => {
  const handleSubmit = () => {
    notify();
  };

  return (
    <div>
      <NavbarAuth />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative bg-white p-8 rounded shadow-md w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Tooltips content="Para iniciar sesión debes ingresar correo y contraseña previamente registrados" />
          <h1
            className="text-5xl font-bold text-center bg-clip-text text-transparent mb-9"
            style={{
              color: "#6147FF",
            }}
          >
            INICIAR SESIÓN
          </h1>
          <h2
            className="block text-gray-800 text-sm font-bold mb-2 text-center mb-9"
            style={{ color: "#6147FF" }}
          >
            Freeway Airlines
          </h2>
          <InputAuthAdmin onSubmit={handleSubmit} />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
