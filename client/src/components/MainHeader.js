import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";

const MainHeaderContainer = styled.div`
  ${tw`
        bg-primary-color
    `}
  height:35.5vh
`;

const ContentContainer = styled.div`
  ${tw`
    w-5/6
    md:w-3/5
    mx-auto
    pt-4
    md:pt-12
    justify-items-center
    `}
`;
const Title = styled.h1`
  ${tw`
        text-white
        text-2xl
        md:text-5xl
        font-semibold
    `}
`;
const ParagraphContainer = styled.div`
  ${tw`
        md:w-4/5
    `}
`;
const Paragraph = styled.p`
  ${tw`
        text-white
        md:text-2xl
        md:pt-4
        tracking-normal
    `}
`;
const SigninRegisterButton = styled.button`
  ${tw`
        bg-secondary-color
        mt-2
        md:mt-10
        px-5
        py-3
        text-white
        font-semibold
    `}
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
