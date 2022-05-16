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
    w-3/5
    ml-auto
    mr-auto
    pt-12
    justify-items-center
    `}
`;
const Title = styled.h1`
  ${tw`
        text-white
        text-5xl
        font-semibold
    `}
`;
const ParagraphContainer = styled.div`
  ${tw`
        w-4/5
    `}
`;
const Paragraph = styled.p`
  ${tw`
        text-white
        text-2xl
        pt-4
        tracking-normal
    `}
`;
const SigninRegisterButton = styled.button`
  ${tw`
        bg-secondary-color
        mt-10
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
