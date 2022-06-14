import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

import NavBar from "./components/NavBar";

const Container = styled.div`
  ${tw`
    
  `}
`;

const PartnersDashboard = () => {
  const partnerProperty = JSON.parse(localStorage.getItem("partnerProperty"));
  console.log(partnerProperty);

  return (
    <Container>
      <NavBar />
    </Container>
  );
};

export default PartnersDashboard;
