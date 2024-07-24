import React from 'react';
import '../index';

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
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-bold mb-2 text-center mb-9"
              htmlFor="password"
              style={{ color: '#6147FF' }}
            >
              Accede al sistema
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="contraseña"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="tuUsuario@freewayairlines.com"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
              style={{background: '#3D1DFF'}}
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
