import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Flights from "./pages/Flights";
import CarRentals from "./pages/CarRentals";
import Attractions from "./pages/Attractions";
import AirportTaxi from "./pages/AirportTaxi";
import Help from "./pages/Help";
import ListYourPropertyHome from "./pages/ListYourPropertyPage/ListYourPropertyHome";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import SearchHotels from "./pages/SearchHotels";
import PartnerRegister from "./pages/Partners/PartnersRegister";
import PartnerSignin from "./pages/Partners/PartnerSignin";
import PartnerCommunity from "./pages/Partners/PartnerCommunity";
import PartnersHelpCenter from "./pages/Partners/PartnersHelpCenter";
import PrivacyStatemnt from "./../src/pages/PrivacyStatement/PrivacyStatement";
import TermsAndConditions from "./../src/pages/TermsAndConditions/TermsAndConditions";

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
        <Route path="/searchhotels" element={<SearchHotels />} />
        <Route path="/partnersignin" element={<PartnerSignin />} />
        <Route path="/partneregister" element={<PartnerRegister />} />
        <Route path="/partnercommunity" element={<PartnerCommunity />} />
        <Route path="/partnershelpcenter" element={<PartnersHelpCenter />} />
        <Route path="/privacystatement" element={<PrivacyStatemnt />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
