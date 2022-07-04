import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const MainContainer = styled.div`
  ${tw`
  md:w-4/5
  2xl:w-3/5
  mx-auto
  `}
`;

const Container = (props) => {
  return <MainContainer> {props.children}</MainContainer>;
};

export default Container;
