import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faBed,
  faWineGlass,
  faSpa,
  faBath,
  faUtensils,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGustLogout } from "../redux/features/Gust/gustAuthSlice";

const NavBarContainer = styled.div`
  ${tw`
    h-full
  `}
`;
const BrandText = styled.h2`
  ${tw`
    text-white
  `}
`;
const HelpContainer = styled.div`
  ${tw`
    mr-2
    mt-2
  `}
`;

const ListYourPropertyContainer = styled.div`
  ${tw`
    text-white
    bg-third-color
    px-1
    my-2
  `}
`;

const Navigation = styled.div`
  ${tw`
    mx-auto
  `}
`;
const LiContainer = styled.li`
  ${tw`
    text-white
    mt-2
    text-sm
  `}
  list-style:none;
`;

const MobNavContainer = styled.div`
  ${tw`
    bg-secondary-color
    absolute
    p-8
    top-0
    right-0
    `}
`;

const MobNav = ({ pressed, closeHandler }) => {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const handleLogOut = () => {
    dispach(setGustLogout());
    navigate("/");
  };
  const gust = JSON.parse(localStorage.getItem("gustProfile"));
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
          <div>
            <NavBarContainer>
              <BrandText>
                <Link to="/">Real Time</Link>
              </BrandText>
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
              {gust === null ? (
                <Button
                  className="text-blue-600 bg-white px-4 mr-2 font-medium text-sm"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              ) : (
                <>
                  <div className="p-3 rounded-full bg-secondary-color mr-1">
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faUser}
                      size="xl"
                    />
                  </div>
                  <div className="mt-2 mr-2">
                    <p className="text-white font-bold">{gust?.username}</p>
                  </div>
                </>
              )}
              {gust === null ? (
                <Button
                  className="text-blue-600 bg-white px-4 mr-2 font-medium text-sm"
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </Button>
              ) : (
                <Button
                  className="text-blue-600 bg-white px-4 font-medium text-sm"
                  onClick={handleLogOut}
                >
                  Logout
                </Button>
              )}
              <Navigation>
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
                  <Link to="/restaurant">
                    <FontAwesomeIcon
                      style={{ color: "white", marginRight: "10px" }}
                      icon={faUtensils}
                      size="xl"
                    />
                    Restaurant
                  </Link>
                </LiContainer>
                <LiContainer>
                  <Link to="/bar">
                    <FontAwesomeIcon
                      style={{ color: "white", marginRight: "10px" }}
                      icon={faWineGlass}
                      size="xl"
                    />
                    Bar Facilities
                  </Link>
                </LiContainer>
                <LiContainer>
                  <Link to="/Spa">
                    <FontAwesomeIcon
                      style={{ color: "white", marginRight: "10px" }}
                      icon={faSpa}
                      size="xl"
                    />
                    Spa
                  </Link>
                </LiContainer>
                <LiContainer>
                  <Link to="/Sauna">
                    <FontAwesomeIcon
                      style={{ color: "white", marginRight: "10px" }}
                      icon={faBath}
                      size="xl"
                    />
                    Sauna
                  </Link>
                </LiContainer>
              </Navigation>
            </NavBarContainer>
          </div>
        </MobNavContainer>
      )}
      <button onClick={closeHandler}>{pressed && "close"}</button>
    </div>
  );
};

export default MobNav;
