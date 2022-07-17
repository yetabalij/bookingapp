import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";

const MainHeaderContainer = styled.div`
  ${tw`
        //bg-primary-color
        //opacity-[.85]
    `}
  height:35.5vh
`;

const ContentContainer = styled.div`
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
const Title = styled.h1`
  ${tw`
        text-white
        text-2xl
        md:text-3xl
        lg:text-4xl
        xl:text-5xl
        font-semibold
    `}
`;
const ParagraphContainer = styled.div`
  ${tw`
        2xl:w-4/5
    `}
`;
const Paragraph = styled.p`
  ${tw`
        text-white
        md:text-xl
        md:pt-2
        xl:pt-4
        tracking-normal
    `}
`;
const SigninRegisterButton = styled.button`
  ${tw`
        bg-secondary-color
        mt-2
        md:mt-4
        lg:mt-5
        2xl:mt-10
        px-5
        py-3
        text-white
        font-semibold
    `}
  box-shadow: -1px 1px 10px 1px #003580;
`;

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainHeaderContainer>
        <ContentContainer>
          <Title>A Lifetime of discounts? It's Genius.</Title>
          <ParagraphContainer>
            <Paragraph>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Booking.com account
            </Paragraph>
          </ParagraphContainer>
          <SigninRegisterButton onClick={() => navigate("/signin")}>
            Signin / Register
          </SigninRegisterButton>
        </ContentContainer>
      </MainHeaderContainer>
    </div>
  );
};

export default MainHeader;
