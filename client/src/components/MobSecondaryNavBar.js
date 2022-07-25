import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

const BrandText = styled.h2`
  ${tw`
    text-white
    mb-2
  `}
`;
const ListYourPropertyContainer = styled.div`
  ${tw`
    text-white
    my-2
  `}
  border-style: solid;
  border-width: 1px;
`;
const BtnRegister = styled.button`
  ${tw`
    text-blue-600
    bg-white
    px-4
    py-1
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
    py-1
    font-medium
    text-sm
  `}
`;
const MobNavContainer = styled.div`
  ${tw`
    bg-secondary-color
    absolute
    p-8
    top-0
    right-0
    z-50
    `}
`;

const MobSecondaryNavBar = ({ pressed, closeHandler }) => {
  const navigate = useNavigate();
  return (
    <div>
      {pressed && (
        <MobNavContainer>
          <button onClick={closeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <BrandText>
            <Link to="/">Real Time</Link>
          </BrandText>
          <Link to="/help">
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faCircleQuestion}
              size="xl"
            />
          </Link>
          <ListYourPropertyContainer>
            <Link to="/listyourpropertyhome" className="ml-2">
              List Your Property
            </Link>
          </ListYourPropertyContainer>
          <BtnRegister onClick={() => navigate("/register")}>
            Register
          </BtnRegister>
          <BtnSignin onClick={() => navigate("/signin")}>Sign in</BtnSignin>
        </MobNavContainer>
      )}
    </div>
  );
};

export default MobSecondaryNavBar;
