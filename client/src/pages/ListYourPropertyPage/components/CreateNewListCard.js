import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  ${tw`
   bg-white
   p-6
   sm:mt-8
   sm:w-[420px]
   w-[320px]
    `}
  height: 450px;
  border-radius: 5px;
`;
const FirstSection = styled.div`
  ${tw`
    
  `}
`;
const NewListingTitle = styled.h1`
  ${tw`
    text-2xl
    font-bold
  `}
`;
const Lists = styled.div`
  ${tw`
    mt-4
    flex
  `}
`;
const ListText = styled.div`
  ${tw`
  text-sm
  ml-3
  `}
`;
const HorizontalLine = styled.hr`
  margin-top: 7px;
  width: 100%;
  border: 1px solid #f3f3f3;
`;
const SecondSection = styled.div`
  ${tw`
  
  `}
`;
const GetStartedButton = styled.button`
  ${tw`
    mt-4
    w-full
    bg-secondary-color
    py-3
    text-sm
  `}
  color:white;
`;
const ThiredSection = styled.div``;

function CreateNewListCard() {
  const navigate = useNavigate();
  return (
    <div>
      <CardContainer>
        <FirstSection>
          <NewListingTitle>Create new listing</NewListingTitle>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheck}
              size="lg"
            />
            <ListText>
              More than 6.4 million holiday rentals already listed
            </ListText>
          </Lists>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheck}
              size="lg"
            />
            <ListText>Over 1 billion holiday rental guest arrivals</ListText>
          </Lists>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheck}
              size="lg"
            />
            <ListText>
              More than 40% of the new holiday rental listings get their first
              booking within a week
            </ListText>
          </Lists>
        </FirstSection>
        <HorizontalLine />
        <SecondSection>
          <p className="text-sm font-medium mt-4">
            Create a partner account to get started:
          </p>
          <p className="text-xs mt-4">
            By continuing, you agree to let Booking.com email you regarding your
            property registration.
          </p>
          <GetStartedButton onClick={() => navigate("/partneregister")}>
            Get Started{" "}
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faArrowRight}
              size="lg"
            />
          </GetStartedButton>
        </SecondSection>
        <HorizontalLine />
        <ThiredSection>
          <p className="font-bold mt-4">Already started a registration?</p>
          <p className="text-blue-400 font-medium mt-2">
            <Link to="/partnersignin">LogIn</Link>
          </p>
        </ThiredSection>
      </CardContainer>
    </div>
  );
}

export default CreateNewListCard;
