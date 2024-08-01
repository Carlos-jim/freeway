import React from 'react';
import Navbar from '../components/navbarUser';
import BackgroundImgUser from '../components/backgroundImgUser';

const CardReservation = () => {
  return (
    <div>
    <Navbar></Navbar>
    <BackgroundImgUser></BackgroundImgUser>
    <div className="min-h-screen flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">RESERVA DE VUELO</h1>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="origen">
              ORIGEN
            </label>
            <input
              id="origen"
              type="text"
              placeholder="Porlamar"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destino">
              DESTINO
            </label>
            <input
              id="destino"
              type="text"
              placeholder="Los Roques"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaSalida">
              FECHA SALIDA
            </label>
            <input
              id="fechaSalida"
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaRegreso">
              FECHA REGRESO
            </label>
            <input
              id="fechaRegreso"
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="space-y-4">
          {/* Flight Option 1 */}
          <div className="bg-purple-100 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-bold">19:00HRS</span> PORLAMAR <br />
                <span className="font-bold">20:00HRS</span> LOS ROQUES
              </div>
              <div className="text-right">
                <span className="block">Nº DE VUELO</span> 0635 <br />
                <span className="block">$75</span>
              </div>
            </div>
            <div className="text-sm">
              DURACION: <span className="font-semibold">01:00:00</span>
            </div>
          </div>

          {/* Flight Option 2 */}
          <div className="bg-purple-100 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-bold">14:00HRS</span> LOS ROQUES <br />
                <span className="font-bold">15:00HRS</span> PORLAMAR
              </div>
              <div className="text-right">
                <span className="block">Nº DE VUELO</span> 0700 <br />
                <span className="block">$75</span>
              </div>
            </div>
            <div className="text-sm">
              DURACION: <span className="font-semibold">01:00:00</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            className="bg-[#37F83F] hover:bg-[#00BB07] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardReservation;
