import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
  ${tw`
        bg-white
        p-8
        mt-4
        flex
        flex-col
      justify-between
      justify-items-center
`}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 1px 2px 1px, rgba(0, 0, 0, 0.3) 0px 1px 1px -1px;
`;

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
