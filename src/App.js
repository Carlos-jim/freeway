import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./view/user/login";
import Register from "./view/user/register";
import FlightRegistration from "./view/admin/fligthRegistration";
import ReservationTable from "./view/user/reservas";
import FlightReservation from "./view/user/FligthReservation";
import PaymentForm from "./view/user/paymentForm";
import CheckInForm from "./view/user/checkin";
import ItineraryTable from "./view/user/Itinerario";
import CardReservation from "./view/tarjetasReservas";
import BoardingPass from "./view/user/tarjetaEmbarque";
import Home from "./view/user/home";
import PersonData from "./view/user/personData";
import LoginAdmin from "./view/admin/loginAdmin";
import ItineraryTableAdmin from "./view/admin/ItinerarioAdmin";
import FlightReservationAdmin from "./view/admin/FligthReservationAdmin";
import PaymentFormAdmin from "./view/admin/paymentFormAdmin";
import BoardingPassAdmin from "./view/admin/tarjetaEmbarqueAdmin";
import { AuthProvider } from "../src/backend/src/context/AuthProvider";
import PrivateRoute from "../src/backend/src/context/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />

            <Route
              path="/embarque-admin"
              element={
                <PrivateRoute
                  element={<BoardingPassAdmin />}
                  roles={["admin"]}
                />
              }
            />
            <Route
              path="/reservar-vuelo-admin"
              element={
                <PrivateRoute
                  element={<FlightReservationAdmin />}
                  roles={["admin"]}
                />
              }
            />
            <Route
              path="/itinerario-admin"
              element={
                <PrivateRoute
                  element={<ItineraryTableAdmin />}
                  roles={["admin"]}
                />
              }
            />
            <Route
              path="/pagos-admin"
              element={
                <PrivateRoute
                  element={<PaymentFormAdmin />}
                  roles={["admin"]}
                />
              }
            />
            <Route
              path="/registrar-vuelo"
              element={
                <PrivateRoute
                  element={<FlightRegistration />}
                  roles={["admin"]}
                />
              }
            />

            <Route path="/"
             element={
              <PrivateRoute element={<Home />} roles={["user"]} />
            } 
            />

            <Route
              path="/reservaciones"
              element={
                <PrivateRoute element={<ReservationTable />} roles={["user"]} />
              }
            />
            <Route
              path="/reservar-vuelo"
              element={
                <PrivateRoute
                  element={<FlightReservation />}
                  roles={["user"]}
                />
              }
            />
            <Route
              path="/embarque"
              element={
                <PrivateRoute element={<BoardingPass />} roles={["user"]} />
              }
            />
            <Route
              path="/pagos"
              element={
                <PrivateRoute element={<PaymentForm />} roles={["user"]} />
              }
            />
            <Route
              path="/chequeo"
              element={
                <PrivateRoute element={<CheckInForm />} roles={["user"]} />
              }
            />
            <Route
              path="/reserva-rapida"
              element={
                <PrivateRoute element={<CardReservation />} roles={["user"]} />
              }
            />
            <Route
              path="/itinerario"
              element={
                <PrivateRoute element={<ItineraryTable />} roles={["user"]} />
              }
            />
            <Route
              path="/chequeo/datos-personales"
              element={
                <PrivateRoute element={<PersonData />} roles={["user"]} />
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
