import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import MainHeader from "./MainHeader";
import MobNav from "./MobNav";
import styled from "styled-components";
import tw from "twin.macro";
import { useMediaQuery } from "react-responsive";
import BgImg from "./../images/bg.jpg";

const HeaderContainer = styled.div`
  ${tw`
    
    `}
`;

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 740px)" });
  const [pressed, setPressed] = useState(false);

  const pressHandler = () => {
    setPressed(true);
  };

  const closeHandler = () => {
    setPressed(false);
  };

  return (
    <div>
      <HeaderContainer style={{ backgroundImage: `url(${BgImg})` }}>
        {isTabletOrMobile ? (
          <div className="flex justify-end ">
            <MobNav pressed={pressed} closeHandler={closeHandler} />
            <div className="pr-5 pt-5">
              <button onClick={pressHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <NavBar />
        )}

        <MainHeader />
      </HeaderContainer>
    </div>
  );
};

export default Header;
