import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Bar from "./pages/Bar/Bar";
import Spa from "./pages/Spa/Spa";
import Sauna from "./pages/Sauna/Sauna";
import Help from "./pages/HelpPage/Help";
import HelpWithoutAccount from "./pages/HelpPage/HelpWithoutAccount";
import ListYourPropertyHome from "./pages/ListYourPropertyPage/ListYourPropertyHome";
import Register from "./pages/Gust/Register";
import Signin from "./pages/Gust/Signin";
import SearchHotels from "./pages/SearchHotels";
import PartnerRegister from "./pages/Partners/PartnersRegister";
import PartnerSignin from "./pages/Partners/PartnerSignin";
import PartnerCommunity from "./pages/Partners/PartnerCommunity";
import PartnersHelpCenter from "./pages/Partners/PartnersHelpCenter";
import PrivacyStatemnt from "./../src/pages/PrivacyStatement/PrivacyStatement";
import TermsAndConditions from "./../src/pages/TermsAndConditions/TermsAndConditions";
import PartnersDashboard from "./../src/pages/Partners/PartnersDashboard";
import Property from "./pages/Properties/Property";
import Protected from "./components/Protected";

//partner dashboard imports
import Reservation from "./pages/Partners/Reservation";
import Room from "./pages/Partners/Room";
import Finance from "./pages/Partners/Finance";
import AddEditRooms from "./pages/Properties/AddEditRooms";

//Gust
import GustProtected from "./components/GustProtected";
import Booking from "./pages/Gust/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/sauna" element={<Sauna />} />
        <Route path="/help" element={<Help />} />
        <Route path="/helpwithoutaccount" element={<HelpWithoutAccount />} />
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
        <Route element={<Protected />}>
          <Route path="/createproperty" element={<Property />} />
          <Route path="/partnersdashboard" element={<PartnersDashboard />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/room" element={<Room />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/addeditrooms" element={<AddEditRooms />} />
        </Route>
        <Route element={<GustProtected />}>
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
