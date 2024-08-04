import React, { useState } from "react";
import TableAdmin from "../components/datatableAdmin";
import Navbar from "../components/navbarUser";
import Tooltips from "../components/tooltip";

const ReservationTable = () => {
  const [filters, setFilters] = useState({
    vuelo: "",
    cedula: "",
    nombre: "",
    tipo: "",
    estado: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Convertir a mayúsculas solo el input de "nombre"
    const transformedValue = id === "nombre" ? value.toUpperCase() : value;

    setFilters({
      ...filters,
      [id]: transformedValue,
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white rounded shadow-md w-full">
          <h1
            className="text-4xl font-bold text-center mb-8 text-white p-4"
            style={{ background: "#6147FF" }}
          >
            RESERVAS
          </h1>
          <form className="mb-8 p-10">
            <Tooltips content="Puede filtrar los vuelos, con los filtros, y confirmar reserva o desconfirmar" />
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="vuelo"
                  type="text"
                  placeholder="CÓDIGO DE VUELO"
                  value={filters.vuelo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cedula"
                  type="text"
                  placeholder="CÉDULA"
                  value={filters.cedula}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
                <input
                  className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nombre"
                  type="text"
                  placeholder="NOMBRE Y APELLIDO"
                  value={filters.nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tipo"
                  type="text"
                  placeholder="TIPO"
                  value={filters.tipo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-1/5 px-2">
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="estado"
                  value={filters.estado}
                  onChange={handleInputChange}
                >
                  <option value="">Todos los estados</option>
                  <option value="CONFIRMADA">CONFIRMADA</option>
                  <option value="SIN CONFIRMAR">SIN CONFIRMAR</option>
                </select>
              </div>
            </div>
          </form>
          <TableAdmin filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default ReservationTable;
