import React from "react";
import "../index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputAuth from "../components/input-auth";
import NavbarAuth from "../components/navbarAuth";

const notify = () => toast.success("Inicio de sesión exitoso");

const Login = () => {
  return (
    <div>
      <NavbarAuth />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h1
            className="text-5xl font-bold text-center bg-clip-text text-transparent mb-9"
            style={{
              color: "#6147FF",
            }}
          >
            Freeway Airlines
          </h1>
          <form>
          <h2
              className="block text-gray-800 text-sm font-bold mb-2 text-center mb-9"
              style={{ color: "#6147FF" }}
            >
              INICIO DE SESIÓN
            </h2>
            <InputAuth />
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                style={{ background: "#37F83F" }}
                onClick={notify}
              >
                Ingresar
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
