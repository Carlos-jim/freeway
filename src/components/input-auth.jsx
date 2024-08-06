import React, { useState } from 'react';

const InputAuth = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    const newErrors = { email: '', password: '' };

    // Validar que el email sea un correo electrónico válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
      valid = false;
    }

    if (password.length <= 3) {
      newErrors.password = 'La contraseña debe tener más de 3 caracteres';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          id="email"
          type="email"
          placeholder="tuUsuario@freewayairlines.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        )}
      </div>
      <div className="mb-6">
      <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">{errors.password}</p>
        )}
        
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-success-color-btn hover:bg-hover-success-color-btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          ACCEDER
        </button>
      </div>
    </form>
  );
};

export default InputAuth;
