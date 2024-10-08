import React, { useState } from "react";
import TableAdmin from "../../components/admin/datatableAdmin";
import NavbarAdmin from "../../components/admin/navbarAdmin";
import Tooltips from "../../components/tooltip";

const ReservationTable = () => {
  const [filters, setFilters] = useState({
    flight_id: "",
    first_name: "",
    last_name: "",
    cedula: "",
    reservation_date: "",
    status: "",
    confirmation: false
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
      <NavbarAdmin></NavbarAdmin>
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
                <label htmlFor="vuelo" className="block text-gray-700 text-sm font-bold mb-2">
                  CÓDIGO DE VUELO
                </label>
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
                <label htmlFor="cedula" className="block text-gray-700 text-sm font-bold mb-2">
                  CÉDULA
                </label>
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
                <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">
                  NOMBRE
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first_name"
                  type="text"
                  placeholder="Pedro"
                  value={filters.first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
                <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">
                  APELLIDO
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="last_name"
                  type="text"
                  placeholder="Rodriguez"
                  value={filters.last_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full md:w-1/5 px-2">
                <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                  ESTADO
                </label>
                <select
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="status"
                  value={filters.status}
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
