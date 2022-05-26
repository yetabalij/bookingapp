import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
    w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mb-20
    flex
    justify-between
    justify-items-center
    `}
`;

const Benefits = () => {
  return (
    <div>
      <Container>some values</Container>
    </div>
  );
};

export default Benefits;
