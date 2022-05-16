import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faBed,
  faPlaneDeparture,
  faCar,
  faMonument,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBarContainer = styled.div`
  ${tw`
    h-32
    bg-primary-color
    flex
    flex-col
    justify-evenly
    justify-items-center
  `}
`;

const Brand = styled.div`
  ${tw`
    flex
    justify-between
    justify-items-center
    w-3/5
    ml-auto
    mr-auto
  `}
`;

const BrandLeft = styled.div`
  ${tw`
    flex
    justify-items-center
  `}
`;

const BrandText = styled.h2`
  ${tw`
    text-2xl
    font-medium
    text-white
    justify-items-center
  `}
`;

const BrandRight = styled.div`
  ${tw`
    flex
    justify-between
    justify-items-center
  `}
`;
const HelpContainer = styled.div`
  ${tw`
    mr-6
    mt-2
    justify-items-center
  `}
`;

const ListYourPropertyContainer = styled.div`
  ${tw`
    text-white
    px-3
    py-2
    mr-4
    justify-items-center
  `}
  border-style: solid;
  border-width: 1px;
`;
const BtnRegister = styled.button`
  ${tw`
    text-blue-600
    bg-white
    px-4
    mr-2
    font-medium
    text-sm
  `}
`;
const BtnSignin = styled.button`
  ${tw`
    text-blue-600
    bg-white
    px-4
    font-medium
    text-sm
  `}
`;

const Navigation = styled.div`
  ${tw`
    flex
    w-3/5
    ml-auto
    mr-auto
    justify-items-center
  `}
`;

const UlContainer = styled.ul`
  ${tw`
    flex
  `}
`;
const LiContainer = styled.li`
  ${tw`
    text-white
    mr-4
    justify-items-center
    font-medium
    text-sm
  `}
`;

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBarContainer>
        <Brand>
          <BrandLeft>
            <BrandText>
              <Link to="/">Real Time</Link>
            </BrandText>
          </BrandLeft>
          <BrandRight>
            <HelpContainer>
              <Link to="/help">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faCircleQuestion}
                  size="xl"
                />
              </Link>
            </HelpContainer>
            <ListYourPropertyContainer>
              <Link to="/listyourpropertyhome">List Your Property</Link>
            </ListYourPropertyContainer>
            <BtnRegister onClick={() => navigate("/register")}>
              Register
            </BtnRegister>
            <BtnSignin onClick={() => navigate("/signin")}>Sign in</BtnSignin>
          </BrandRight>
        </Brand>
        <Navigation>
          <UlContainer>
            <LiContainer>
              <Link to="/">
                <FontAwesomeIcon
                  style={{ color: "white", marginRight: "10px" }}
                  icon={faBed}
                  size="xl"
                />
                Stay
              </Link>
            </LiContainer>
            <LiContainer>
              <Link to="/flight">
                <FontAwesomeIcon
                  style={{ color: "white", marginRight: "10px" }}
                  icon={faPlaneDeparture}
                  size="xl"
                />
                Flights
              </Link>
            </LiContainer>
            <LiContainer>
              <Link to="/carrentals">
                <FontAwesomeIcon
                  style={{ color: "white", marginRight: "10px" }}
                  icon={faCar}
                  size="xl"
                />
                Car Rentals
              </Link>
            </LiContainer>
            <LiContainer>
              <Link to="/attractions">
                <FontAwesomeIcon
                  style={{ color: "white", marginRight: "10px" }}
                  icon={faMonument}
                  size="xl"
                />
                Attractions
              </Link>
            </LiContainer>
            <LiContainer>
              <Link to="/airporttaxi">
                <FontAwesomeIcon
                  style={{ color: "white", marginRight: "10px" }}
                  icon={faTaxi}
                  size="xl"
                />
                Airport Taxi
              </Link>
            </LiContainer>
          </UlContainer>
        </Navigation>
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
