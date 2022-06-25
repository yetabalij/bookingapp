import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "./components/NavBar";
import Footer from "../../components/Footer";

const Container = styled.div`
  ${tw`
    
  `}
`;
const ContentContainer = styled.div`
  ${tw`
     w-5/6
    md:w-4/5
    2xl:w-3/5
    mx-auto
    mt-20
    justify-items-center
  `}
`;
const Card = styled.div`
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
const Button = styled.button`
  ${tw`
    bg-secondary-color
    text-white
    py-3
    px-4
    text-sm
    font-bold
    mt-6
    `}
`;

const Reservation = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <ContentContainer>
          <Card>Reservations</Card>
        </ContentContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Reservation;
