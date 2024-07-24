import React from 'react';
import '../index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputAuth from '../components/input-auth';

const notify = () => toast.success("Registrado exitosamente");

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1
          className="text-5xl font-bold text-center bg-clip-text text-transparent mb-9"
          style={{
            backgroundImage: 'linear-gradient(to left, #3D1DFF, #6147FF, #D451FF, #EC458D, #F8938C)',
          }}
        >
          Freeway Airlines
        </h1>
        <form>
          <InputAuth/>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              style={{background: '#3D1DFF'}}
              onClick={notify}
            >
              Registrarse
            </button>
            
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
