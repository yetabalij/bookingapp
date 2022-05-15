import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import CarRentals from "./pages/CarRentals";
import Attractions from "./pages/Attractions";
import AirportTaxi from "./pages/AirportTaxi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flights />} />
        <Route path="/carrentals" element={<CarRentals />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/airporttaxi" element={<AirportTaxi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
