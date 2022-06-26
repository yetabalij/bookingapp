import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${tw`
    bg-secondary-color
    text-white
    py-10
  `}
`;
const Content = styled.div`
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
  grid 
  grid-cols-3 
  gap-4
  `}
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <div>
          <Link to="/">Stay</Link>
        </div>
        <div>TWO</div>
        <div>three</div>
      </Content>
    </Container>
  );
};

export default Footer;
