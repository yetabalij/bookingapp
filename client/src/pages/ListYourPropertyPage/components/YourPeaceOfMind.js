import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Img from "./../../../images/house.svg";

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
    mt-12
    mb-24
    sm:flex
    justify-between
    justify-items-center
    `}
`;
const LeftSection = styled.div`
  ${tw`
    
    `}
`;
const Title = styled.h1`
  ${tw`
        text-4xl
        font-bold
        mb-2
    `}
`;
const Lists = styled.div`
  ${tw`
    flex
    mt-8
    mb-8
    items-center
    `}
`;
const Button = styled.button`
  ${tw`
    bg-white
    text-blue-500
    py-2
    px-4
    text-sm
    font-bold
    border-blue-500
    `}
  border: 1px solid
`;

const RightSection = styled.div`
  ${tw`
        
    `}
`;

const YourPeaceOfMind = () => {
  return (
    <div>
      <Container>
        <LeftSection>
          <Title>Your peace of mind is our top priority</Title>
          <span>
            Here’s how we’re helping you feel confident welcoming guests:
          </span>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheckCircle}
              size="lg"
            />
            <p className="ml-4 ">
              Set <span className="font-bold"> house rules</span> guest must
              agree to before they stay
            </p>
          </Lists>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheckCircle}
              size="lg"
            />
            <p className="ml-4 ">
              Request <span className="font-bold"> damage deposits</span> for
              extra security
            </p>
          </Lists>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheckCircle}
              size="lg"
            />
            <p className="ml-4 ">
              Report <span className="font-bold"> guest misconduct</span> if
              something goes wrong
            </p>
          </Lists>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheckCircle}
              size="lg"
            />
            <p className="ml-4 ">
              Access <span className="font-bold">24/7 support</span> in 43+
              languages
            </p>
          </Lists>
          <Lists>
            <FontAwesomeIcon
              style={{ color: "green" }}
              icon={faCheckCircle}
              size="lg"
            />
            <p className="ml-4 ">
              Protection against liability claims from guests and neighbours up
              to <span className="font-bold"> £1,000,000</span> for every
              reservation
            </p>
          </Lists>
          <Button>Learn more</Button>
        </LeftSection>
        <RightSection>
          <img src={Img} />
        </RightSection>
      </Container>
    </div>
  );
};

export default YourPeaceOfMind;
