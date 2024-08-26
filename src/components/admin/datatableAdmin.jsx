import React, { useState, useEffect, useMemo, useCallback } from 'react';
import api from '../../api/api'; // Asegúrate de tener configurado axios en api.js

const TableAdmin = ({ filters }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await api.get('/get-reservations');
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = data;

      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          filtered = filtered.filter(item => item[key]?.includes(value));
        }
      });

      setFilteredData(filtered);
      setCurrentPage(1);
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

  const handleConfirmClick = async (index) => {
    const updatedData = [...filteredData];
    const reservation = updatedData[index];


    reservation.confirmation = !reservation.confirmation;
    reservation.status = reservation.confirmation ? 'CONFIRMADA' : 'SIN CONFIRMADA';

    setFilteredData(updatedData);

    try {

      await api.put(`/put-reservation/${reservation.id}`, {
        confirmation: reservation.confirmation,
        status: reservation.status,
      });

      console.log('Reserva actualizada exitosamente en la base de datos');
    } catch (error) {
      console.error('Error al actualizar la reserva:', error);


      updatedData[index].confirmation = !reservation.confirmation; // Undo toggle
      updatedData[index].status = reservation.confirmation ? 'SIN CONFIRMADA' : 'CONFIRMADA';
      setFilteredData(updatedData);
    }
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
              <th className="py-2 px-4 border-b">NOMBRE</th>
              <th className="py-2 px-4 border-b">APELLIDO</th>
              <th className="py-2 px-4 border-b">NÚMERO DE TELEFONO</th>
              <th className="py-2 px-4 border-b">CEDULA DE IDENTIDAD</th>
              <th className="py-2 px-4 border-b">FECHA DE RESERVACION</th>
              <th className="py-2 px-4 border-b">ESTADO DE LA RESERVA</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((reservation, index) => (
              <tr key={index} className="text-gray-700">
                <td className="py-2 px-4 border-b">{reservation.flight_id}</td>
                <td className="py-2 px-4 border-b">{reservation.first_name}</td>
                <td className="py-2 px-4 border-b">{reservation.last_name}</td>
                <td className="py-2 px-4 border-b">{reservation.phone_number}</td>
                <td className="py-2 px-4 border-b">{reservation.cedula}</td>
                <td className="py-2 px-4 border-b">{reservation.reservation_date}</td>
                <td className={`py-2 px-4 border-b ${reservation.confirmation ? 'text-green-500' : 'text-red-500'}`}>
                  {reservation.status}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleConfirmClick(index)}
                    className={`${reservation.confirmation ? 'bg-red-600 hover:bg-red-700' : 'bg-success-color-btn hover:bg-hover-success-color-btn'} text-white font-bold py-1 px-2 rounded`}

                  >
                    {reservation.confirmation ? (
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
