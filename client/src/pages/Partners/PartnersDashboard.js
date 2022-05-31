import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Property from "../Properties/Property";
import Rooms from "../Properties/Rooms";

import { useDispatch, useSelector } from "react-redux";
import { setPartnerLogout } from "../../redux/features/Partners/partnersAuthSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  ${tw`
    flex
    
  `}
  height:100vh
`;
const LeftContainer = styled.div`
  ${tw`
  bg-gray-100
  `}
`;
const RightContainer = styled.div`
  ${tw`
  
  `}
`;
const Button = styled.button`
  ${tw`
    py-2
    px-6
    text-white
    bg-secondary-color
    font-bold
  `}
`;

const PartnersDashboard = () => {
  const [isProperty, setIsProperty] = useState(true);
  const dispach = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispach(setPartnerLogout());
    navigate("/partnersignin");
  };
  const propertyHandler = () => {
    if (!isProperty) {
      setIsProperty(true);
    }
  };
  const hotelHandler = () => {
    setIsProperty(false);
  };

  return (
    <Container>
      <LeftContainer>
        <Button onClick={logoutHandler}>Sign Out</Button>
        <Button onClick={propertyHandler}>Manage Property</Button>
        <Button onClick={hotelHandler}>Manage Room</Button>
      </LeftContainer>
      <RightContainer> {isProperty ? <Property /> : <Rooms />}</RightContainer>
    </Container>
  );
};

export default PartnersDashboard;
