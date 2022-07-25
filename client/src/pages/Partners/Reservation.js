import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NavBar from "./components/NavBar";
import Footer from "../../components/Footer";
import Card from "./../../components/Card";

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

// const Button = styled.button`
//   ${tw`
//     bg-secondary-color
//     text-white
//     py-3
//     px-4
//     text-sm
//     font-bold
//     mt-6
//     `}
// `;

const Reservation = () => {
  return (
    <div>
      <Container>
        <NavBar />
        <ContentContainer>
          <Card>Under Development...</Card>
        </ContentContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Reservation;
