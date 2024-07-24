import React from 'react';


const InputAuth = () => {
    return(
        <div>
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
        </div>
    );
};


export default InputAuth;