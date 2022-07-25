import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setPartnerLogout } from "./../../../redux/features/Partners/partnersAuthSlice";
import { clearPartnerProperty } from "./../../../redux/features/Properties/propertySlice";
import { partnerProperty } from "./../../../redux/features/Properties/propertySlice";
import { useNavigate } from "react-router-dom";

const NavBar2 = styled.div`
  ${tw`
    text-white
  `}
`;
const NavItemContainer = styled.div`
  ${tw`
    pr-2
    flex
    flex-col
    py-1
  `}
`;
const Button = styled.button`
  ${tw`
    text-white
    bg-secondary-color
    font-bold
  `}
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

const PartnersMobNavBar = ({ pressed, closeHandler }) => {
  const Partners = JSON.parse(localStorage.getItem("partnerProfile"));
  const { Property } = useSelector((state) => ({ ...state.properties }));

  const formValue = {
    partnerId: Partners?._id,
  };
  const dispach = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispach(partnerProperty(formValue));
  }, [Partners?._id]);

  const logoutHandler = () => {
    dispach(setPartnerLogout());
    dispach(clearPartnerProperty());
    navigate("/partnersignin");
  };
  return (
    <>
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
          <NavBar2>
            <h3 className="text-2xl font-bold cursor-pointer">
              <Link to="/partnersdashboard">Real Time</Link>
            </h3>
            <NavItemContainer>
              <Link className="mr-3" to="/reservation">
                Reservation
              </Link>
              <Link className="mr-3" to="/room">
                Room
              </Link>
              <Link className="mr-3" to="/finance">
                Finance
              </Link>
            </NavItemContainer>
            {Partners !== null && (
              <h3 className="text-lg font-medium mb-1">{Partners.username}</h3>
            )}

            {Property !== null && (
              <img
                className="w-12 h-12 rounded-full mb-1"
                src={Property[0]?.image}
                alt="profile"
              />
            )}
            <Button onClick={logoutHandler}>Sign Out</Button>
          </NavBar2>
        </MobNavContainer>
      )}
    </>
  );
};

export default PartnersMobNavBar;
