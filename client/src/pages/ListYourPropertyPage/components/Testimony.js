import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Person from "./../../../images/ListYourProperty/person.png";

const ContainerBackground = styled.div`
  ${tw`
    bg-gray-100
    `}
`;
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
    mb-20
    `}
`;
const TitleContainer = styled.div`
  ${tw`      
    `}
`;
const CardContainer = styled.div`
  ${tw`
     flex  
     justify-between
    `}
`;
const Card = styled.div`
  ${tw`
        bg-white
        flex
        mt-4
        mb-16
    `}
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const TextDiv = styled.div`
  ${tw`
  
  `}
`;

const Testimony = () => {
  return (
    <div>
      <ContainerBackground>
        <Container>
          <TitleContainer>
            <h1 className="text-4xl font-bold">Meet Elvira</h1>
            <p className="mt-5">
              See why she loves renting out her property on Booking.com.
            </p>
          </TitleContainer>
          <CardContainer>
            <Card>
              <div className="sm:flex">
                <img className="sm:w-2/5" src={Person} alt="person" />
                <TextDiv>
                  <p className="text-3xl font-bold pl-12 pt-14 pr-14 tracking-wide leading-10">
                    “It makes me more confident to know that I can report guest
                    misconduct for all the properties in my portfolio on
                    Booking.com.”
                  </p>
                  <p className="pl-12 mt-8 font-bold text-xl">Elvira Cuéllar</p>
                  <p className="pl-12 text-gray-500">
                    Palma Homes Mallorca, Mallorca
                  </p>
                </TextDiv>
              </div>
            </Card>
          </CardContainer>
        </Container>
      </ContainerBackground>
    </div>
  );
};

export default Testimony;
