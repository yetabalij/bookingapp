import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  ${tw`
    bg-secondary-color
    text-white
    py-10
    mt-20
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
          <Link className="block" to="/">
            Stay
          </Link>
          <Link className="block" to="/restaurant">
            Restaurant
          </Link>
          <Link className="block" to="/bar">
            Bar Facilities
          </Link>
          <Link className="block" to="/spa">
            Spa
          </Link>
          <Link className="block" to="/sauna">
            Sauna
          </Link>
        </div>
        <div>
          <Link className="block" to="/help">
            Help
          </Link>
          <Link className="block" to="/helpwithoutaccount">
            Help Without Contact
          </Link>
          <Link className="block" to="/partnershelpcenter">
            Partners Help
          </Link>
          <Link className="block" to="/partnercommunity">
            Partners Community
          </Link>
        </div>
        <div>
          <Link className="block" to="/termsandconditions">
            Terms and Conditions
          </Link>
          <Link className="block" to="/privacystatement">
            Privacy Statement
          </Link>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
