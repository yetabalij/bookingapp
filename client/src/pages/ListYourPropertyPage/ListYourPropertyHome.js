import React from "react";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import tw from "twin.macro";

const AppContainer = styled.div`
  ${tw`
    
  `}
`;

const BodyContainer = styled.div`
  ${tw`
    overflow-hidden
    md:w-4/5
    2xl:w-3/5
    mx-auto
    `}
`;

const FooterContainer = styled.div`
  ${tw`
    bg-primary-color
    `}
`;

const ListYourPropertyHome = () => {
  return (
    <AppContainer>
      <NavBar></NavBar>
      <BodyContainer>Hello</BodyContainer>
      <FooterContainer>Footer</FooterContainer>
    </AppContainer>
  );
};

export default ListYourPropertyHome;
