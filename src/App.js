import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './view/login.js';
import Register from './view/register.js';
import FlightRegistration from './view/fligthRegistration.js';
import ReservationTable from './view/reservas.jsx';
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
