import React, { useState, useEffect } from 'react';

const data = [
    {
        vuelo: '9023948523849',
        cedula: '131913456',
        nombre: 'JOHN DOE',
        tipo: 'TURISTA',
        estado: 'SIN CONFIRMAR',
      },
      {
        vuelo: '3475293478293',
        cedula: '131913456',
        nombre: 'JOHN DOE',
        tipo: 'PRIMERA CLASE',
        estado: 'CONFIRMADA',
      },
      {
        vuelo: '38749283759123',
        cedula: '131913456',
        nombre: 'JOHN DOE',
        tipo: 'CLASE EJECUTIVA',
        estado: 'SIN CONFIRMAR',
      },
      {
        vuelo: '642739571923823',
        cedula: '131913456',
        nombre: 'JOHN DOE',
        tipo: 'CLASE EJECUTIVA',
        estado: 'SIN CONFIRMAR',
      },
      {
        vuelo: '643276582393892',
        cedula: '131913456',
        nombre: 'JOHN DOE',
        tipo: 'PRIMERA CLASE',
        estado: 'SIN CONFIRMAR',
      },
      {
        vuelo: '7582347912837912',
        cedula: '131913456',
        nombre: 'JOHN DOE',
        tipo: 'TURISTA',
        estado: 'SIN CONFIRMAR',
      },
      // ...
];

const TableAdmin = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = data;

      if (filters.vuelo) {
        filtered = filtered.filter(item => item.vuelo.includes(filters.vuelo));
      }
      if (filters.cedula) {
        filtered = filtered.filter(item => item.cedula.includes(filters.cedula));
      }
      if (filters.nombre) {
        filtered = filtered.filter(item => item.nombre.includes(filters.nombre));
      }
      if (filters.tipo) {
        filtered = filtered.filter(item => item.tipo.includes(filters.tipo));
      }
      if (filters.estado) {
        filtered = filtered.filter(item => item.estado.includes(filters.estado));
      }

      setFilteredData(filtered);
      setCurrentPage(1); // Reset to first page when filters change
    };

    applyFilters();
  }, [filters]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
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
            style={{background: "#6147FF"}}
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
            style={{background: "#6147FF"}}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="text-white" style={{background: "#6147FF"}}>
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
                <td className={`py-2 px-4 border-b ${reservation.estado === 'CONFIRMADA' ? 'text-green-500' : 'text-red-500'}`}>
                  {reservation.estado}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button className="hover:bg-purple-700 text-white font-bold py-1 px-2 rounded" style={{background: "#6147FF"}}>
                    <i className="fas fa-check"></i>
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
          style={{background: "#6147FF"}}
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
          style={{background: "#6147FF"}}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default TableAdmin;
