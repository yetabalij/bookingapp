import React from "react";

import HelpContacts from "./Components/HelpContacts";
import SecondaryNavBar from "./../../components/SecondaryNavBar";
import FrequentlyAsked from "./Components/FrequentlyAsked";

const Help = () => {
  return (
    <div>
      <SecondaryNavBar />
      <HelpContacts />
      <FrequentlyAsked />
    </div>
  );
};

export default Help;
