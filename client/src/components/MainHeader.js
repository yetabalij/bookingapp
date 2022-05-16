import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MainHeaderContainer = styled.div`
  ${tw`
        bg-primary-color
    `}
  height:35.5vh
`;

const MainHeader = () => {
  return (
    <div>
      <MainHeaderContainer>MainHeader</MainHeaderContainer>
    </div>
  );
};

export default MainHeader;
