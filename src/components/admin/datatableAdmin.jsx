import React, { useState, useEffect, useMemo, useCallback } from 'react';

const data = [
  {
    vuelo: '9023948523849',
    cedula: '131913456',
    nombre: 'JOHN DOE',
    tipo: 'ECONOMICA',
    estado: 'SIN CONFIRMAR',
    confirmado: false, // Nuevo estado para gestionar la confirmación
  },
  {
    vuelo: '3475293478293',
    cedula: '131913456',
    nombre: 'JOHN DOE',
    tipo: 'ECONOMICA',
    estado: 'CONFIRMADA',
    confirmado: true, // Nuevo estado para gestionar la confirmación
  },
  // ... resto de los datos
];

const TableAdmin = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = data;

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          filtered = filtered.filter(item => item[key]?.includes(value));
        }
      });

      setFilteredData(filtered);
      setCurrentPage(1); // Reset to the first page when filters change
    };

    applyFilters();
  }, [filters]);

  const indexOfLastRow = useMemo(() => currentPage * rowsPerPage, [currentPage, rowsPerPage]);
  const indexOfFirstRow = useMemo(() => indexOfLastRow - rowsPerPage, [indexOfLastRow, rowsPerPage]);
  const currentRows = useMemo(() => filteredData.slice(indexOfFirstRow, indexOfLastRow), [filteredData, indexOfFirstRow, indexOfLastRow]);

  const totalPages = useMemo(() => Math.ceil(filteredData.length / rowsPerPage), [filteredData.length, rowsPerPage]);

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

  // Función para manejar el cambio de estado al hacer clic en el botón
  const handleConfirmClick = (index) => {
    const newData = [...filteredData];
    newData[index].confirmado = !newData[index].confirmado;
    newData[index].estado = newData[index].confirmado ? 'CONFIRMADA' : 'NO CONFIRMADA'; // Cambia el estado basado en la confirmación
    setFilteredData(newData);
  };

  return (
    <div className='p-10'>
      <div className="flex justify-between items-center mb-4">
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="text-white" style={{ background: "#6147FF" }}>
              <th className="py-2 px-4 border-b">VUELO</th>
              <th className="py-2 px-4 border-b">CÉDULA</th>
              <th className="py-2 px-4 border-b">NOMBRE Y APELLIDO</th>
              <th className="py-2 px-4 border-b">TIPO</th>
              <th className="py-2 px-4 border-b">ESTADO DE LA RESERVA</th>
              <th className="py-2 px-4 border-b">CONFIRMAR DATOS</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((reservation, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b">{reservation.vuelo}</td>
                <td className="py-2 px-4 border-b">{reservation.cedula}</td>
                <td className="py-2 px-4 border-b">{reservation.nombre}</td>
                <td className="py-2 px-4 border-b">{reservation.tipo}</td>
                <td className={`py-2 px-4 border-b ${reservation.confirmado ? 'text-green-500' : 'text-red-500'}`}>
                  {reservation.estado}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleConfirmClick(index)}
                    className={`${reservation.confirmado ? 'bg-red-600 hover:bg-red-700' : 'bg-success-color-btn hover:bg-hover-success-color-btn'} text-white font-bold py-1 px-2 rounded`}
                  >
                    {reservation.confirmado ? (
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
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
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="hover:bg-purple-700 text-white font-bold py-1 px-2 rounded disabled:opacity-50"
          style={{ background: "#6147FF" }}
        >
          Anterior
        </button>
        <span>
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
  );
};

export default TableAdmin;
