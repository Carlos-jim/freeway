import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './view/login';
import Register from './view/register';
import FlightRegistration from './view/fligthRegistration';
import ReservationTable from './view/reservas';
import FlightReservation from './view/FligthReservation';
import PaymentForm from './view/paymentForm';
import CheckInForm from './view/checkin';
import ItineraryTable from './view/Itinerario';
import CardReservation from './view/tarjetasReservas'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pagos" element={<PaymentForm />} />
          <Route path="/registrar-vuelo" element={<FlightRegistration />} />
          <Route path="/reservaciones" element={<ReservationTable />} />
          <Route path="/reservar-vuelos" element={<FlightReservation />} />
          <Route path="/chequeo" element={<CheckInForm />} />
          <Route path="/nose" element={<CardReservation />} />
          <Route path="/itinerario" element={<ItineraryTable />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
