import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './view/user/login';
import Register from './view/user/register';
import FlightRegistration from './view/user/fligthRegistration';
import ReservationTable from './view/user/reservas';
import FlightReservation from './view/user/FligthReservation';
import PaymentForm from './view/user/paymentForm';
import CheckInForm from './view/user/checkin';
import ItineraryTable from './view/user/Itinerario';
import CardReservation from './view/tarjetasReservas'
import BoardingPass from './view/user/tarjetaEmbarque';
import Home from './view/user/home';
import PersonData from './view/user/personData';
import LoginAdmin from './view/admin/loginAdmin';
import ItineraryTableAdmin from './view/admin/ItinerarioAdmin';
import FlightReservationAdmin from './view/admin/FligthReservationAdmin';
import PaymentFormAdmin from './view/admin/paymentFormAdmin';
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
