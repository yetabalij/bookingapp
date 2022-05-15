import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import CarRentals from "./pages/CarRentals";
import Attractions from "./pages/Attractions";
import AirportTaxi from "./pages/AirportTaxi";
import Help from "./pages/Help";
import ListYourPropertyHome from "./pages/ListYourPropertyHome";
import Register from "./pages/Register";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flights />} />
        <Route path="/carrentals" element={<CarRentals />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/airporttaxi" element={<AirportTaxi />} />
        <Route path="/help" element={<Help />} />
        <Route
          path="/listyourpropertyhome"
          element={<ListYourPropertyHome />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
