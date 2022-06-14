import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

import NavBar from "./components/NavBar";

const Container = styled.div`
  ${tw`
    
  `}
`;

const PartnersDashboard = () => {
  return (
    <Container>
      <NavBar />
    </Container>
  );
};

export default PartnersDashboard;
