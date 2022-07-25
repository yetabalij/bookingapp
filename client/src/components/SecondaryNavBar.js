import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobSecondaryNavBar from "./MobSecondaryNavBar";

const NavBarContainer = styled.div`
  ${tw`
    h-20
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
    md:w-4/5
    2xl:w-3/5
    mx-auto
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
    text-base
    md:text-xl
    lg:text-2xl
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
    mr-2
    md:mr-6
    mt-2
    justify-items-center
  `}
`;

const ListYourPropertyContainer = styled.div`
  ${tw`
    text-white
    px-1
    md:px-3
    md:py-2
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

const NavBar = () => {
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const [pressed, setPressed] = useState(false);

  const pressHandler = () => {
    setPressed(true);
  };

  const closeHandler = () => {
    setPressed(false);
  };

  return (
    <div>
      <NavBarContainer>
        {isTabletOrMobile ? (
          <div className="flex justify-end ">
            <MobSecondaryNavBar pressed={pressed} closeHandler={closeHandler} />
            <div className="pr-5 pt-5">
              <button onClick={pressHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </NavBarContainer>
    </div>
  );
};

export default NavBar;
