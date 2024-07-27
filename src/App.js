import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './view/login';
import Register from './view/register';
import FlightRegistration from './view/fligthRegistration';
import ReservationTable from './view/reservas';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar-vuelo" element={<FlightRegistration />} />
          <Route path="/reservacion" element={<ReservationTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
