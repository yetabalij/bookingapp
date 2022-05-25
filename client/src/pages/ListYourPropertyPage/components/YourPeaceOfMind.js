import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    pt-4
    md:pt-2
    lg:pt-3
    2xl:pt-12
    justify-items-center
    `}
`;

const YourPeaceOfMind = () => {
  return (
    <div>
      <Container>YourPeaceOfMind</Container>
    </div>
  );
};

export default YourPeaceOfMind;
