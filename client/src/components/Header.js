import React from "react";
import NavBar from "./NavBar";
import MainHeader from "./MainHeader";
import styled from "styled-components";
import tw from "twin.macro";
import BgImg from "./../images/bg.jpg";

const HeaderContainer = styled.div`
  ${tw`
    
    `}
`;

const Header = () => {
  return (
    <div>
      <HeaderContainer style={{ backgroundImage: `url(${BgImg})` }}>
        <NavBar />
        <MainHeader />
      </HeaderContainer>
    </div>
  );
};

export default Header;
