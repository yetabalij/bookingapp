import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FrequentlAskedContainer = styled.div`
  ${tw`
    md:w-4/5
    2xl:w-3/5
    mx-auto
  `}
`;

const FrequentlyAsked = () => {
  return (
    <div>
      <FrequentlAskedContainer>FrequentlyAsked</FrequentlAskedContainer>
    </div>
  );
};

export default FrequentlyAsked;
