import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  ${tw`
    h-16
    bg-primary-color
    flex
    flex-col
    justify-evenly
    justify-items-center
  `}
`;

const Brand = styled.div`
  ${tw`
    flex
    justify-between
    justify-items-center
    md:w-4/5
    2xl:w-3/5
    mx-auto
  `}
`;

const BrandLeft = styled.div`
  ${tw`
    flex
    justify-items-center
  `}
`;

const BrandText = styled.h2`
  ${tw`
    text-base
    md:text-xl
    lg:text-2xl
    font-medium
    text-white
    justify-items-center
  `}
`;

const ThirdNavBar = () => {
  return (
    <div>
      <NavBarContainer>
        <Brand>
          <BrandLeft>
            <BrandText>
              <Link to="/">Real Time</Link>
            </BrandText>
          </BrandLeft>
        </Brand>
      </NavBarContainer>
    </div>
  );
};

export default ThirdNavBar;
