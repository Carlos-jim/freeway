import React, { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

const DataTableItinerario = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const indexOfLastRow = useMemo(() => currentPage * rowsPerPage, [currentPage, rowsPerPage]);
  const indexOfFirstRow = useMemo(() => indexOfLastRow - rowsPerPage, [indexOfLastRow, rowsPerPage]);
  const currentRows = useMemo(() => data.slice(indexOfFirstRow, indexOfLastRow), [data, indexOfFirstRow, indexOfLastRow]);

  const totalPages = useMemo(() => Math.ceil(data.length / rowsPerPage), [data.length, rowsPerPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }, [currentPage, totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const handleRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-[#6147FF] text-white">
            <tr>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                Fecha Salida
              </th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                Fecha Llegada
              </th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                Origen
              </th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                Destino
              </th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                Precio
              </th>
              <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">
                Reservar
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {currentRows.map((item, index) => (
              <tr key={index} className="bg-gray-100 border-b">
                <td className="py-3 px-4">{item.arrival_time}</td>
                <td className="py-3 px-4">{item.departure_time}</td>
                <td className="py-3 px-4">{item.departure_airport}</td>
                <td className="py-3 px-4">{item.arrival_airport}</td>
                <td className="py-3 px-4">{item.flight_cost}</td>
                <td className="py-3 px-4 text-center">
                  <Link to="/reservar-vuelo">
                    <button className="bg-success-color-btn p-2 pr-5 pl-5 rounded-lg hover:hover-success-color-btn text-white rounded-mt p-2 hover:bg-[#00BB07] focus:outline-none focus:shadow-outline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <label htmlFor="rowsPerPage" className="mr-2">
            Filas por página:
          </label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border rounded py-1 px-2"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="hover:bg-purple-700 text-white font-bold py-1 px-2 rounded disabled:opacity-50"
            style={{ background: "#6147FF" }}
          >
            Anterior
          </button>
          <span className="mx-2">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="hover:bg-purple-700 text-white font-bold py-1 px-2 rounded disabled:opacity-50"
            style={{ background: "#6147FF" }}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTableItinerario;
