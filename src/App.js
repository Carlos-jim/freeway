import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './view/login';
import Register from './view/user/register';
import FlightRegistration from './view/fligthRegistration';
import ReservationTable from './view/reservas';
import FlightReservation from './view/FligthReservation';
import PaymentForm from './view/user/paymentForm';
import CheckInForm from './view/checkin';
import ItineraryTable from './view/Itinerario';
import CardReservation from './view/tarjetasReservas'
import BoardingPass from './view/user/tarjetaEmbarque';
import Home from './view/home';
import PersonData from './view/personData';
import LoginAdmin from './view/loginAdmin';
import ItineraryTableAdmin from './view/ItinerarioAdmin';
import FlightReservationAdmin from './view/FligthReservationAdmin';
import PaymentFormAdmin from './view/paymentFormAdmin';
import BoardingPassAdmin from './view/admin/tarjetaEmbarqueAdmin';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/registro" element={<Register />} />
          <Route path="/embarque-admin" element={<BoardingPassAdmin />} />
          <Route path="/reservar-vuelo-admin" element={<FlightReservationAdmin />} />
          <Route path="/embarque" element={<BoardingPass />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/itinerario-admin" element={<ItineraryTableAdmin />} />
          <Route path="/pagos" element={<PaymentForm />} />
          <Route path="/pagos-admin" element={<PaymentFormAdmin />} />
          <Route path="/registrar-vuelo" element={<FlightRegistration />} />
          <Route path="/reservaciones" element={<ReservationTable />} />
          <Route path="/reservar-vuelo" element={<FlightReservation />} />
          <Route path="/chequeo" element={<CheckInForm />} />
          <Route path="/reserva-rapida" element={<CardReservation />} />
          <Route path="/itinerario" element={<ItineraryTable />} />
          <Route path="/chequeo/datos-personales" element={<PersonData />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
