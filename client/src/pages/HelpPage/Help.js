import React from "react";

import HelpContacts from "./Components/HelpContacts";
import SecondaryNavBar from "./../../components/SecondaryNavBar";
import FrequentlyAsked from "./Components/FrequentlyAsked";
import Footer from "../../components/Footer";

const Help = () => {
  return (
    <div className="overflow-hidden">
      <SecondaryNavBar />
      <HelpContacts />
      <FrequentlyAsked />
      <Footer />
    </div>
  );
};

export default Help;
